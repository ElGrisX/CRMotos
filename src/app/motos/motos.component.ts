import { Component, OnInit } from '@angular/core';
import { MotosService } from './motos.service';
import { Moto } from './moto.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css'],
  providers: [MotosService]
})
export class MotosComponent implements OnInit {
	private sub: any;
	private categoria: string;
	public motos: Moto[];



  constructor(private MotosService: MotosService, private route: ActivatedRoute) {
  	this.motos = [];

  }

  getMotoCategoria() {
		this.motos = this.MotosService.Motos.filter((motoFilter) => {
			return motoFilter.categoria === this.categoria;

		});
	}

  ngOnInit() {
  	this.readParams();
  }

  public addedMoto(moto:Moto){
    this.MotosService.addMoto(moto);
    this.getMotoCategoria();
    
  }

  private readParams() {
    this.sub = this.route.params.subscribe(params => {
        this.categoria = params['categoria'];
        this.getMotoCategoria();
    });
}

}
