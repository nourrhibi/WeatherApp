import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';



@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.css']
})
export class TodayForecastComponent implements OnInit {


  weatherData: any

  
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    

    this.weatherService.getWeather('Tunis').subscribe((data:any) => {

      const localtime = data.location.localtime; // e.g., "2025-05-11 20:51"

      // Convert to Date object
      const dateObj = new Date(localtime);

      // Get day name (e.g., "Sunday", "Monday", etc.)
      const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
      
      
      this.weatherData = {
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

      console.log("weatherData ", this.weatherData)
    })



    this.weatherService.currentWeather$.subscribe((data)=>{

      if(data){
        this.weatherData = data
      }
    });

    
  }

}
