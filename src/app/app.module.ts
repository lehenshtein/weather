import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherService} from './weather.service';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {WeatherFromToLocalStorageService} from './weather-from-to-local-storage.service';
import { SavedCardsComponent } from './saved-cards/saved-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SavedCardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [WeatherService, WeatherFromToLocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
