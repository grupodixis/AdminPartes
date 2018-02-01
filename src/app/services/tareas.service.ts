import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Obras} from '../interfaces/modelos';
import 'rxjs/add/operator/map';
@Injectable()
export class TareasService {
  obras: Obras;
  urlBase = 'http://api.pablosanchezweb.com/';

  constructor(private http: Http) {

  }

getObras() {
  const url = `${this.urlBase}obras`;
  console.log (url);
  return this.http.get( url )
        .map(response => response.json());
}


}
