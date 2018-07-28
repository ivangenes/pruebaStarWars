import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarshipsServiceProvider } from '../../providers/starships-service/starships-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
dato:any;
  constructor(public navCtrl: NavController, public startShipservice:StarshipsServiceProvider) {
    this.traerStarships();
  }

  traerStarships()
  {
    this.startShipservice.traerstarships()
    .subscribe( resp=>{
                 let data = resp.json();
                 this.dato = data.results;
                 console.log(this.dato); 
               });
  }
}
