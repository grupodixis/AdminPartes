
export interface Obras {
  nombreObra: String;
  clienteObra: String;
  idObra?: Number;
}

export interface Tareas {
  idTarea?: Number;
  nombreTarea: String;
  tiempoEstimado: Number;
  nombreObra: String;
  idObra: Number;
}

export interface ModeloMixto {
  nombreObra: String;
  idObra: Number;
  ClienteObra: String;
  tareas: [{
    idParent: Number;
    idTarea: Number;
    tarea: String,
    duracion?: Number,
    partes?: [ {
      inicio?: Number,
      final?: Number,
      observacion?: String,
      fotografias?: [{
        url: String,
        comment?: String
      }]
    } ]
  }];
}
