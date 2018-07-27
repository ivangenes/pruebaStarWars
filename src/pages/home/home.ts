import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FilmsServiceProvider } from '../../providers/films-service/films-service';
import { URL_SERVICIOS } from '../../url.servicios';
import { Http } from '@angular/http';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
dato:any;
datos:any;
url=URL_SERVICIOS
  constructor(public navCtrl: NavController, public filmsService:FilmsServiceProvider,public http: Http, public modalCtrl:ModalController) {
    this.traerFilms();
  }

  traerFilms()
  {
    this.filmsService.traerFilms()
    .subscribe( resp=>{
                 let data = resp.json();
                 this.dato = data.results;
                 console.log(this.dato);

              
               });

    let array = this.dato;
    
  }
  getPerson(id): any {
    let endpoint = 'people/' + id + '/';
    return this.http.get(this.url + endpoint);
  }

  presentActionSheet(actores)
  {
    let endpoint = 'people/' + actores + '/';
    return this.http.get(actores) .subscribe( resp=>{
      let data = resp.json();
      this.datos = data;
      console.log(this.datos);
      let modal = this.modalCtrl.create(ModalPage,{'actor':this.datos}); 
      modal.present();
   
    });
  
  }
}
