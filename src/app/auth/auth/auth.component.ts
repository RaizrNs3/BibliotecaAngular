import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/modelos/libro.model';
import { Prestamo } from 'src/app/modelos/prestamo.model';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  usuario = new Usuario('Daniel', 'López', 'Hernández', '55155083', 'Daniel2008');
  libro = new Libro("f1s3f4sf", "Los juegos del hambre", "J.K Rowlling", "España", "01/01/2021", 100000);
  prestamo = new Prestamo("01/01/2021", "12/10/2050", this.usuario);
  
  constructor() { }

  ngOnInit(): void {
  }

}
