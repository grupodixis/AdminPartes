import { Injectable } from '@angular/core';
import {Http, Headers, Jsonp} from '@angular/http';
import {Obras} from '../interfaces/modelos';
import 'rxjs/add/operator/map';

@Injectable()
export class TareasService {
  obras: Obras;
  urlBase = 'http://api.pablosanchezweb.com/';

  constructor(private http: Http,
              private jsonp: Jsonp) {

  }

getObras() {
  const url = `${this.urlBase}obras`;
  return this.http.get( url )
        .map(response => response.json());
}

setObras(obra: Obras) {
  const url = `${this.urlBase}obras`;
  const body = JSON.stringify(obra);
  console.log(body);
  const headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  return this.http.post(url, body, {headers})
        .map( res => {
          console.log(res.json());
          return res.json();
          } ) ;
}

}
