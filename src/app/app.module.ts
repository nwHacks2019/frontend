import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GiveComponent } from './give/give.component';
import { SeekComponent } from './seek/seek.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GiveComponent,
    SeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
