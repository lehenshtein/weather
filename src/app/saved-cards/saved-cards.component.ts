import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {WeatherFromToLocalStorageService} from '../weather-from-to-local-storage.service';
import {Weather} from '../models/weather.model';

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.component.html',
  styleUrls: ['./saved-cards.component.sass']
})
export class SavedCardsComponent implements OnInit, OnChanges {
  @Input() weatherDataToSavedCards;
  constructor(private weatherFromToLocalStorageService: WeatherFromToLocalStorageService) { }
  weatherCardsData: Weather[];
  weatherArr = [];

  ngOnInit() {
    if (this.weatherFromToLocalStorageService.getWeatherFromLocalStorage()) {
      this.weatherFromToLocalStorageService.getWeatherFromLocalStorage()
        .subscribe(
          (data: Weather[]) => {
            this.weatherCardsData = data;
          }
        );
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.weatherDataToSavedCards) {

      this.weatherArr = JSON.parse(localStorage.getItem('weather'));
      this.weatherFromToLocalStorageService.getWeatherFromLocalStorage()
        .subscribe(
          (data: Weather[]) => {
            this.weatherCardsData = data;
          }
        );
    }
  }
  onDelete(idx) {
    this.weatherCardsData.splice(idx, 1);
    this.weatherFromToLocalStorageService.removeWeatherFromLocalStorage(idx);
  }

}
