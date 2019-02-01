import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoWeatherService {
  getGeo(): Observable<any> {
    return Observable.create(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          observer.next(position.coords);
          observer.complete();
        },
          error => observer.error(error)
          );
      } else {
        observer.error('Something went wrong');
      }
    });
  }
}
