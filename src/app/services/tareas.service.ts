import { Injectable } from '@angular/core';
import {Http, Headers, Jsonp} from '@angular/http';
import {Tareas} from '../interfaces/modelos';
import 'rxjs/add/operator/map';

@Injectable()
export class TareasService {
  urlBase = 'http://api.pablosanchezweb.com/';
  tareas: Tareas [] ;
  constructor(private http: Http,
              private jsonp: Jsonp) { }



  getTareas(idObra: any) {
    const url = `${this.urlBase}tareas/${idObra}`;
    return this.http.get( url )
          .map(response => response.json());
  }

  setTareas(tarea: Tareas) {
    const url = `${this.urlBase}tareas`;
    const body = JSON.stringify(tarea);
    const headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    return this.http.post(url, body, {headers})
          .map( res => {
            return res.json();
            } ) ;
  }
}
