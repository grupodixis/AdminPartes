import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tareas, Obras } from '../../interfaces/modelos';
import { TareasService } from '../../services/tareas.service';
import { ObrasService } from '../../services/obras.service';
import { log } from 'util';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: []
})
export class TareasComponent implements OnInit {
  tareas: Tareas[];
  obra: Obras;
  paramId: number;
  nuevaTarea: Tareas = {
    nombreObra: '',
    idObra: 0,
    nombreTarea: '',
    tiempoEstimado: 15
  } ;
  constructor(private route: ActivatedRoute,
              private _ts: TareasService,
              private _os: ObrasService) {

    this.route.params.subscribe(params => {
      this.paramId = params['id'];
    });
    this._os.getObras(this.paramId)
        .subscribe(obra => {
          this.obra = obra[0];
          this.nuevaTarea  = {
            nombreObra: this.obra.nombreObra,
            idObra: this.obra.idObra,
            nombreTarea: '',
            tiempoEstimado: 15
          } ;

        });
    this.getTareas(this.paramId);
              }

  ngOnInit() {
  }


  getTareas(idObra: any) {
    this._ts.getTareas(idObra)
    .subscribe(res => {
      this.tareas = res;
      console.log(this.tareas);
    });
  }

  agregarTarea() {
    if (this.nuevaTarea.nombreTarea && this.nuevaTarea.tiempoEstimado){
      console.log(this.nuevaTarea);
      this._ts.setTareas(this.nuevaTarea)
        .subscribe(res => {
          console.log(res);
          this.getTareas(this.obra.idObra);
          this.nuevaTarea.nombreTarea = '';
          this.nuevaTarea.tiempoEstimado = 15;
          
        })
    }
   

  }

  borrarTarea() {}
}
