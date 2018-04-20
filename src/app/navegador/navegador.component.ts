import { Component, OnInit } from '@angular/core';
import {FechaActual } from '../date.service'

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

public date = new Date();


  constructor(private FechaActual:FechaActual) { 

  //this.date = FechaActual.getDateTime();
  }

  ngOnInit() {
  }

}
