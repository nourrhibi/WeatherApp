import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private currentWeatherSource = new BehaviorSubject<any>(null);
  currentWeather$ = this.currentWeatherSource.asObservable();

  private forecastWeatherSource = new BehaviorSubject<any>(null);
  forecastWeather$ = this.forecastWeatherSource.asObservable();


  constructor(private http: HttpClient) { }

  
  getWeather(city : String){
   
    return this.http.get('http://api.weatherapi.com/v1/current.json?key=' + environment.weatherApiKey + '&q=' + city + '&aqi=no');
  }

  getForecast(city : String){
    return this.http.get('http://api.weatherapi.com/v1/forecast.json?key=' + environment.weatherApiKey + '&q=' + city +'&days=7&aqi=no&alerts=no') 
  }

  searchCountry(query: String){
    return this.http.get<any[]>('http://api.weatherapi.com/v1/search.json?key=' + environment.weatherApiKey + '&q=' + query);
  }
 

  updateCurrentWeather(data: any) {
    this.currentWeatherSource.next(data);
  }

  updateForecastWeather(data: any) {
    this.forecastWeatherSource.next(data);
  }
}
