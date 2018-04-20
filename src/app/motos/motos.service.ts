import { Injectable } from '@angular/core';
import { Moto } from './moto.model'

@Injectable()
export class MotosService {
	public Motos: Moto[] = [{
	name: 'CB160F',
    categoria: 'SPORT',
    description:'Es hora de subir de nivel.',
    motor: '4 tiempos, mono cilindrico',
	enfriamiento: 'aire',
	cilindrada: '160 CC',
	potencia: '15 Hp @ 8,500 rpm',
	capacidad: '12 litros',
	peso: '140 kg',
	precio: '¢ 1,495,000.00',
	imagen: 'CB160F-HORNET-principal.jpg'

	},

	{
	name: 'CRF250R',
    categoria: 'DOBLE_PROPOSITO',
    description:'Cuando la sed de triunfo corre por las venas, la CRF250R es lo que necesitás.',
	motor: '4 tiempos, mono cilindrico,4 válvulas UniCam®',
	enfriamiento: 'liquido',
	cilindrada: '250 CC',
	potencia: '15 Hp @ 8,500 rpm',
	capacidad: '6.4 litros',
	peso: '104 kg',
	precio: '¢ 4,495,000.00',
	imagen: 'CRF250R-principal-1.jpg'
	}

	];
	constructor() { 

	}

	public getMotos(){
		return this.Motos;
	}

	public addMoto(newMoto:Moto){
		this.Motos.push(newMoto);
	}

	public removeProduct(moto:Moto){
		this.Motos = this.Motos.filter(item => item !== moto);
	}

	public editMoto(){

	}

}
