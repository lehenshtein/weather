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
      if (localStorage.getItem('weather').indexOf(name) === -1) {
        this.weatherArr.unshift(name);
        localStorage.setItem('weather', JSON.stringify(this.weatherArr));
      }
    }

  }
  getWeatherFromLocalStorage () {
    if (localStorage.getItem('weather') !== null) {
      this.weatherArr = JSON.parse(localStorage.getItem('weather'));
      return forkJoin(...this.weatherArr.map(i => {
        return this.weatherService.searchWeather(i);
      }));
    }
  }
  getLastWeatherFromLocalStorage () {
    if (localStorage.getItem('weather') !== null) {
      this.weatherArr = JSON.parse(localStorage.getItem('weather'));
      return this.weatherService.searchWeather(this.weatherArr[0]);
    }
  }
  removeWeatherFromLocalStorage(cardIndex) {
    if (localStorage.getItem('weather') !== null) {
      this.weatherArr.splice(cardIndex, 1);
      localStorage.setItem('weather', JSON.stringify(this.weatherArr));
    }
  }
}
