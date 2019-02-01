import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {WeatherService} from '../weather.service';
import {Weather} from '../models/weather.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Output() sendWeather = new EventEmitter<Object>();


  form: FormGroup;
  weatherData;

  constructor(private weatherService: WeatherService) { }
  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }
  onSubmit() {
    this.weatherService.searchWeather(this.form.value.search)
      .subscribe(
        (data: Weather) => {
        this.weatherData = new Weather(data.clouds, data.main, data.name);
        this.sendWeather.emit(this.weatherData);
      },
        (err: HttpErrorResponse) => {
          alert(err.statusText +  err.status);
        }
      );

  }

}
