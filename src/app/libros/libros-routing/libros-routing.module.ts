import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminLibrosComponent } from '../admin-libros/admin-libros.component';
import { ConsultarComponent } from '../consultar/consultar.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { EditarComponent } from '../editar/editar.component';
import { Libro } from 'src/app/modelos/libro.model';

const librosRoutes: Routes = [
  { path: 'adminLibros', component: AdminLibrosComponent},
  { path: 'consultar', component: ConsultarComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'editar', component: EditarComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(librosRoutes)
  ],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
