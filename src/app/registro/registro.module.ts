import {NgModule, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule implements OnInit{
  @ViewChild('nombre', {static: true}) nombre: ElementRef;
  @ViewChild('tarjeta', {static: true}) tarjeta: ElementRef;
  @ViewChild('expiracion', {static: true}) expiracion: ElementRef;
  @ViewChild('seguridad', {static: true}) seguridad: ElementRef;

  userChkOut = {
    nombre: '',
    tarjeta: '',
    expiracion: '',
    seguridad: ''
  };

  constructor() { }

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(): void{
  }

  enviarCheckOut(): void {
    this.userChkOut.nombre = this.nombre.nativeElement.value;
    this.userChkOut.tarjeta = this.tarjeta.nativeElement.value;
    this.userChkOut.expiracion = this.expiracion.nativeElement.value;
    this.userChkOut.seguridad = this.seguridad.nativeElement.value;
    console.log(this.userChkOut);
    if (this.userChkOut.nombre !== '' && this.userChkOut.tarjeta !== '') {
      document.getElementById('confirmaPago').classList.remove('d-none');
    }
  }
}

