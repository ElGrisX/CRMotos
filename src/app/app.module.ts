import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { NavegadorComponent } from './navegador/navegador.component';
import { AboutComponent } from './about/about.component';
import { MotosComponent } from './motos/motos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MotosAddComponent } from './motos/motos-add/motos-add.component';
import { MotosDisplayComponent } from './motos/motos-display/motos-display.component';
import {FechaActual } from './date.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegadorComponent,
    AboutComponent,
    MotosComponent,
    ContactoComponent,
    MotosAddComponent,
    MotosDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ FechaActual],
  bootstrap: [AppComponent]
})
export class AppModule { }
