import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {URL_SERVICIOS} from '../../url.servicios';


/*
  Generated class for the StarshipsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StarshipsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello StarshipsServiceProvider Provider');
    this.traerstarships();
  }

  traerstarships()
  {
    let url = URL_SERVICIOS + 'starships/';
    return this.http.get(url);
  }


}
