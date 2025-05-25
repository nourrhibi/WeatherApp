import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeekForecastComponent } from './week-forecast/week-forecast.component';
import { TodayForecastComponent } from './today-forecast/today-forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeekForecastComponent,
    TodayForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
