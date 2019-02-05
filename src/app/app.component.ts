import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Weather} from './models/weather.model';
import {WeatherFromToLocalStorageService} from './weather-from-to-local-storage.service';
import {GeoWeatherService} from './geo-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  weatherData;
  weatherDataToSavedCards: Weather;
  lat: string;
  lon: string;

  constructor (
     private weatherService: WeatherService,
     private weatherFromToLocalStorageService: WeatherFromToLocalStorageService,
     private geoWeather: GeoWeatherService
  ) {}
  ngOnInit() {
    this.geoWeather.getGeo()
      .subscribe((geoData) => {
      this.lat = geoData.latitude;
      this.lon = geoData.longitude;

      this.weatherService.geolocationWeather(this.lon, this.lat)
        .subscribe((data: Weather) => {
          this.weatherData = new Weather(data.clouds, data.main, data.name);
        });
        if (localStorage.getItem('weather')) {
          return;
        } else {
          JSON.stringify(localStorage.setItem('weather', '[]'));
        }
    });

    this.weatherFromToLocalStorageService.getWeatherFromLocalStorage();
  }

  onWeather(weatherObj) {
    this.weatherData = weatherObj;
  }
  saveWeatherToLocalStorage(name) {
    this.weatherFromToLocalStorageService.saveWeatherToLocalStorage(name);
    this.weatherFromToLocalStorageService.getLastWeatherFromLocalStorage()
      .subscribe(
        (data: Weather) => {
          this.weatherDataToSavedCards = data;
          this.weatherFromToLocalStorageService.weatherCardsData.unshift(data);
        }
      );
  }

}
