import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Moto } from '../moto.model';


@Component({
  selector: 'app-motos-add',
  templateUrl: './motos-add.component.html',
  styleUrls: ['./motos-add.component.css']
})
export class MotosAddComponent implements OnInit {

@Output() addedMoto: EventEmitter<Moto> = new EventEmitter<Moto>();
	public pname: string = '';
	public pcategoria: string = '';
	public pmotor: string = '';
	public pdescription: string = '';
	public penfriamiento: string = '';
	public pcilindrada: string = '';
	public ppotencia: string = '';
	public pcapacidad: string = '';
	public ppeso: string = '';
	public pprecio: string = '';
	public pimagen: string = '';


  constructor() { }

  ngOnInit() {
  }

public addMoto(){
		let moto = new Moto();
		moto.name = this.pname;
		moto.categoria = this.pcategoria;
		moto.motor = this.pmotor;
		moto.description = this.pdescription;
		moto.enfriamiento = this.penfriamiento;
		moto.cilindrada = this.pcilindrada;
		moto.potencia = this.ppotencia;
		moto.capacidad = this.pcapacidad;
		moto.peso = this.ppeso;
		moto.precio = this.pprecio;
		moto.imagen = this.pimagen;

		this.addedMoto.emit(moto);
		this.pname = '';
		this.pcategoria='';
		this.pmotor='';
		this.pdescription='';
		this.penfriamiento='';
		this.pcilindrada='';
		this.ppotencia='';
		this.pcapacidad='';
		this.ppeso='';
		this.pprecio='';
		this.pimagen='';

}
}

