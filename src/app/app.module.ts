import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Import the library
import { CarouselModule } from 'ngx-owl-carousel-o';
// Needs to import the BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
