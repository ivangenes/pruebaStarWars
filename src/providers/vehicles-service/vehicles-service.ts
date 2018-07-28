import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URL_SERVICIOS } from '../../url.servicios';




@Injectable()
export class VehiclesServiceProvider {

  constructor(public http: Http) {
    console.log('Hello VehiclesServiceProvider Provider');
    this.traervehicles();
  }

  traervehicles()
  {
    let url = URL_SERVICIOS + 'vehicles/';
    return this.http.get(url);
  }

}
