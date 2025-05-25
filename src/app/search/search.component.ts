import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../weather.service';


interface TodayData {
  temperature: number;
  humidity: number;
  condition: string;
  country: string;
  date: Date;
  dayname : string;
  windSpeed: number;
  pressure : number;
  uv: number;
  isDay: number
}

interface  DailyForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {

  
  searchQuery = ''; // Holds the user's input
  searchValue: string = ''; 
  suggestions: any[] = [];

  

  constructor(private weatherService: WeatherService) { }


  

  ngOnInit(): void {
  }


  onSearch(){

   this.weatherService.getWeather(this.searchValue).subscribe((data : any) => {

    console.log("data ",data);

     const localtime = data.location.localtime; // e.g., "2025-05-11 20:51"

     // Convert to Date object
     const dateObj = new Date(localtime);

     // Get day name (e.g., "Sunday", "Monday", etc.)
     const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

     console.log(dateObj);    // 👉 Full Date object
     console.log(dayName);    // 👉 "Sunday", "Monday", etc.




     let todayData: TodayData = {
       temperature: Math.round(data.current.temp_c),
       humidity: data.current.humidity,
       condition: data.current.condition.text,
       country: data.location.name,
       date: dateObj,
       dayname: dayName,
       windSpeed: Math.round((data.current.wind_kph / 3.6) * 100) / 100,
       pressure: data.current.pressure_mb,
       uv: data.current.uv,
       isDay : data.current.is_day
     };


     this.weatherService.updateCurrentWeather(todayData);

   });



    this.weatherService.getForecast(this.searchValue).subscribe((data :any)=>{

      console.log("Forecast weather ",data)

      let forecastData: DailyForecast = data.forecast.forecastday.map((day: any) => {
        const dateObj = new Date(day.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        }); // e.g. "Tue, Feb 12"

        return {
          date: formattedDate,
          maxTemp: day.day.maxtemp_c,
          minTemp: day.day.mintemp_c,
          condition: day.day.condition.text
        };
      });


      this.weatherService.updateForecastWeather(forecastData);

    });

  }


  onInputChange() {
    if (this.searchValue.trim().length > 2) {
      this.weatherService.searchCountry(this.searchValue).subscribe((results) => {
        this.suggestions = results;
      });
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(city: any) {
    this.searchValue = city.name; // or city.region, depending on what you want
    this.suggestions = [];
    this.onSearch(); // this should trigger your weather fetch
  }
}
