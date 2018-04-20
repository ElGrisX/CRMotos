import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-motos-display',
  templateUrl: './motos-display.component.html',
  styleUrls: ['./motos-display.component.css']
})
export class MotosDisplayComponent implements OnInit {

 @Input() moto;
  constructor() { }

  ngOnInit() {
  }

}
