import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
 actores:any;
 homeWo = { name:'',rotation_period:'',orbital_period:''};
 filmss = {name:''}
 especiess = {name:''}
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.actores = this.navParams.get('actor');
    console.log(this.actores);
    this.homeword(this.actores.homeworld);
    this.films(this.actores.films);
    this.species(this.actores.species);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  homeword(dato)
  {
    return this.http.get(dato) .subscribe( resp=>{
      let data = resp.json();
      this.homeWo.name = data.name;
      this.homeWo.orbital_period = data.orbital_period;
      this.homeWo.rotation_period = data.rotation_period;
  });
    
  } 
  films(dato)
  {
    return this.http.get(dato) .subscribe( resp=>{
      let data = resp.json();
      console.log(data)
  });
  }

  species(dato)
  {
    return this.http.get(dato) .subscribe( resp=>{
      let data = resp.json();
      this.especiess.name = data.name;
      console.log(this.especiess)
  });
  }
}
