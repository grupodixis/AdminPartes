export interface Obras {
  nombreObra: string;
  clienteObra: string;
  idObra?: number;
}

export interface Tareas {
  idTarea?: number;
  nombreTarea: String;
  tiempoEstimado: String;
  nombreObra: String;
  idObra: number;
}
