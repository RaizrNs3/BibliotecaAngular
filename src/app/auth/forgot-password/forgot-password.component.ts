import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Input() mensaje: string;
  flag: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarCadena(){
    this.flag = !this.flag;
  }
  
}
