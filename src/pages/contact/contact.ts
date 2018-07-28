import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VehiclesServiceProvider } from '../../providers/vehicles-service/vehicles-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
dato:any;
  constructor(public navCtrl: NavController,public vehiclesService:VehiclesServiceProvider) {
    this.traerVehicles();
  }

  traerVehicles()
  {
    this.vehiclesService.traervehicles()
    .subscribe( resp=>{
                 let data = resp.json();
                 this.dato = data.results;
                 console.log(this.dato);              
               });
    
  }
}
