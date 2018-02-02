import { Injectable } from '@angular/core';
import {Http, Headers, Jsonp} from '@angular/http';
import {Obras} from '../interfaces/modelos';
import 'rxjs/add/operator/map';

@Injectable()
export class ObrasService {
  obras: Obras;
  urlBase = 'http://api.pablosanchezweb.com/';

    constructor(private http: Http,
              private jsonp: Jsonp) {

  }

getObras(id?) {
  const url = `${this.urlBase}obras/${id ? id : '' }`;

  return this.http.get( url )
        .map(response => response.json());
}

setObras(obra: Obras) {
  const url = `${this.urlBase}obras`;
  const body = JSON.stringify(obra);
  const headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  return this.http.post(url, body, {headers})
        .map( res => {
          return res.json();
          } ) ;
}
putObras(obra: Obras) {
  const url = `${this.urlBase}obras`;
  const body = JSON.stringify(obra);
  return this.http.put(url, body)
        .map(res => {
          console.log(res.json());
          return res.json();

        });
}



}
