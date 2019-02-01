import { Component, OnInit } from '@angular/core';
import {WeatherFromToLocalStorageService} from '../weather-from-to-local-storage.service';
import {Weather} from '../models/weather.model';

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.sass']
})
export class SavedCardsComponent implements OnInit {

  constructor(private weatherFromToLocalStorageService: WeatherFromToLocalStorageService) { }
  weatherCardsData: Weather[];
  ngOnInit() {
    this.weatherCardsData = this.weatherFromToLocalStorageService.weatherCardsData;
  }
  onDelete(idx) {
    this.weatherCardsData.splice(idx, 1);
    this.weatherFromToLocalStorageService.removeWeatherFromLocalStorage(idx);
  }

}
