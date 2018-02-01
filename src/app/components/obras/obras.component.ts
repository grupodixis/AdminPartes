import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import {Obras} from '../../interfaces/modelos';


@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styles: []
})
export class ObrasComponent implements OnInit {
obras: Obras [] = [];
nuevaObra: Obras = {
  nombreObra : '' ,
  clienteObra : ''
};
  constructor(private _ts: TareasService) {
    this.getObras();
   }

  ngOnInit() {
  }

  getObras( ) {
    this._ts.getObras()
        .subscribe( obras => {
          this.obras = obras;
          console.log(this.obras);
        });
  }
  agregarObra() {
    if (this.nuevaObra.nombreObra.length > 0 && this.nuevaObra.clienteObra.length > 0){
      console.log(this.nuevaObra.nombreObra, this.nuevaObra.clienteObra);
      this.nuevaObra.clienteObra = '';
      this.nuevaObra.nombreObra = '';
    }
  }
  editarObra(obra: Obras) {
    console.log(obra.clienteObra, obra.nombreObra);
  }


}
