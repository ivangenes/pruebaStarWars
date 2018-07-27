import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
  Generated class for the VehiclesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VehiclesServiceProvider {

  constructor(public http: Http) {
    console.log('Hello VehiclesServiceProvider Provider');
  }

}
