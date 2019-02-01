import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {weatherUrl} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) {}

  searchWeather(city: string): Observable<Object> {
    return this.http.get(`${weatherUrl}&q=${city}`);
  }
  geolocationWeather(lon: string, lat: string): Observable<Object> {
    return this.http.get(`${weatherUrl}&lon=${lon}&lat=${lat}`);
  }
}
