import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatExpansionModule
} from '@angular/material';

import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';


@NgModule({
  declarations: [AppComponent, MainFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatExpansionModule,
    AppRoutingModule,
    NguCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
