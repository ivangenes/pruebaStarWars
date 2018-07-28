import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../../url.servicios'


@Injectable()
export class FilmsServiceProvider {
 
  constructor(public http: Http) {
    console.log('Hello FilmsServiceProvider Provider');
  }

  traerFilms()
  {
    let url = URL_SERVICIOS + 'films';
  
    return this.http.get(url);
    
  }
  traerPersonas()
  {
    
  }


}
