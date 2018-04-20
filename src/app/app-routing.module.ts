import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import {MotosComponent } from './motos/motos.component';
import {ContactoComponent } from './contacto/contacto.component';
import {AboutComponent } from './about/about.component';
const routes: Routes = [
	
    { 
        path: 'home',  
        component: HomeComponent
    },

     { 
        path: 'motos/:categoria',  
        component: MotosComponent
    },
      { 
        path: 'contacto',  
        component: ContactoComponent
    },
      { 
        path: 'about',  
        component: AboutComponent
    },
    { 
        path: '**', 
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }