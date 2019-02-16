import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GiveComponent } from './give/give.component';
import { SeekComponent } from './seek/seek.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GiveNotifComponent } from './give-notif/give-notif.component';
import { SeekNotifComponent } from './seek-notif/seek-notif.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GiveComponent,
    SeekComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    GiveNotifComponent,
    SeekNotifComponent
  ],
  entryComponents: [
    GiveNotifComponent,
    SeekNotifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
