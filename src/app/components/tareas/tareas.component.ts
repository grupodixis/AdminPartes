import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tareas, Obras } from '../../interfaces/modelos';
import { TareasService } from '../../services/tareas.service';
import { ObrasService } from '../../services/obras.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: []
})
export class TareasComponent implements OnInit {
  tareas: Tareas[];
  obra: Obras;
  paramId: number;
  constructor(private route: ActivatedRoute,
              private _ts: TareasService,
              private _os: ObrasService) {

    this.route.params.subscribe(params => {
      this.paramId = params['id'];
    });
    this._os.getObras(this.paramId)
        .subscribe(obra => {
          this.obra = obra[0];


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

  }

  borrarTarea() {}
}
