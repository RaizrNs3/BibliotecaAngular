import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrestamosComponent } from '../prestamos/prestamos.component';
import { SolicitarComponent } from '../solicitar/solicitar.component';
import { DevolucionComponent } from '../devolucion/devolucion.component';

const prestamosRoutes: Routes = [
  { path: 'prestamos', component: PrestamosComponent},
  { path: 'solicitar', component: SolicitarComponent},
  { path: 'devolucion', component: DevolucionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(prestamosRoutes)
  ],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
