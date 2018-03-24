import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './tv/search/search.component';
import { Page404Component } from './page404/page404.component';
import {FormsModule} from "@angular/forms";
import { TvmazeService } from './tv/tvmaze.service';
import {HttpClientModule} from "@angular/common/http";
import { PosterComponent } from './tv/poster/poster.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,
    Page404Component,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TvmazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
