import { Injectable } from '@angular/core';


@Injectable()
export class FechaActual {
	
	constructor() { 

	}
 public getDateTime(){

var today = new Date();
var dd = today.getDate().toString();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = dd+'/'+mm+'/'+yyyy;

return today;
 }


}
