import { TestBed } from '@angular/core/testing';

import { WeatherFromToLocalStorageService } from './weather-from-to-local-storage.service';

describe('WeatherFromToLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherFromToLocalStorageService = TestBed.get(WeatherFromToLocalStorageService);
    expect(service).toBeTruthy();
  });
});
