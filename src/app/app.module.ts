import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StyleComponent } from './style/style.component';
import {Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
   RouterModule ,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






