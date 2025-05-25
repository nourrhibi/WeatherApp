import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css']
})
export class WeekForecastComponent implements OnInit {

  forecastData: any

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {


    this.weatherService.getForecast('Tunis').subscribe((data: any) => {

      console.log("Forecast weather ", data)

      

      this.forecastData = data.forecast.forecastday.map((day: any) => {
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


    });


    this.weatherService.forecastWeather$.subscribe((data) => {

      if (data) {
        this.forecastData = data
      }
    });
  }

}
