import { Injectable } from '@angular/core';
import {Weather} from './models/weather.model';
import {WeatherService} from './weather.service';
import {forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherFromToLocalStorageService {

  weatherArr = [];
  weatherCardsData: Weather[] = [];

  constructor(private weatherService: WeatherService) { }
  saveWeatherToLocalStorage(name) {
    if (localStorage.getItem('weather') !== null) {
      this.weatherArr = JSON.parse(localStorage.getItem('weather'));
    }
    this.weatherArr.unshift(name);
    localStorage.setItem('weather', JSON.stringify(this.weatherArr));
  }
  getWeatherFromLocalStorage () {
    if (localStorage.getItem('weather') !== null) {
      this.weatherArr = JSON.parse(localStorage.getItem('weather'));
      this.weatherArr.forEach(i => {
        this.weatherService.searchWeather(i)
          .subscribe(
            (data: Weather) => {
              this.weatherCardsData.unshift(data);
              console.log(i);
            }
          );
      });
    }
  }
  getLastWeatherFromLocalStorage () {
    if (localStorage.getItem('weather') !== null) {
      this.weatherArr = JSON.parse(localStorage.getItem('weather'));

      this.weatherService.searchWeather(this.weatherArr[0])
        .subscribe(
          (data: Weather) => {
            this.weatherCardsData.unshift(data);
          }
        );
    }
  }
  removeWeatherFromLocalStorage(cardIndex) {
    if (localStorage.getItem('weather') !== null) {
      //this.weatherArr = JSON.parse(localStorage.getItem('weather'));
      this.weatherArr.splice(cardIndex, 1);
      localStorage.setItem('weather', JSON.stringify(this.weatherArr));
    }
  }
}
