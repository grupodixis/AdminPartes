import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PartesComponent } from './components/partes/partes.component';
import { ObrasComponent } from './components/obras/obras.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { RouterModule } from '@angular/router';
import { TareasService } from './services/tareas.service';
import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PartesComponent,
    ObrasComponent,
    TareasComponent,
    NavbarComponent



  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTES,
    HttpModule,
    FormsModule



  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
