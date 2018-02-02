import { Component, OnInit } from '@angular/core';
import { ObrasService } from '../../services/obras.service';
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
  constructor(private _os: ObrasService) {
    this.getObras();
   }

  ngOnInit() {
  }

  getObras( ) {
    this._os.getObras()
        .subscribe( obras => {
          this.obras = obras;
        });
  }
  agregarObra() {
    if (this.nuevaObra.nombreObra.length > 0 && this.nuevaObra.clienteObra.length > 0) {
      console.log(this.nuevaObra.nombreObra, this.nuevaObra.clienteObra);
      this._os.setObras(this.nuevaObra)
        .subscribe(res => console.log(res));
      this.getObras();
      this.nuevaObra.clienteObra = '';
      this.nuevaObra.nombreObra = '';
    }
  }
  actualizarObra(obra: Obras) {
    this._os.putObras(obra).subscribe();
  }


}
