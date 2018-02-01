import {RouterModule} from '@angular/router';
import { ObrasComponent } from './components/obras/obras.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { PartesComponent } from './components/partes/partes.component';



export const ROUTES = [
  { path: 'obras',      component: ObrasComponent },
  { path: 'tareas',      component: TareasComponent },
  { path: 'partes',      component: PartesComponent },
  { path: '**',      component: ObrasComponent }
];

export const APP_ROUTES: any = RouterModule.forRoot(ROUTES, { useHash: true });
