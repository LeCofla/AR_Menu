import { Component, OnInit } from '@angular/core';
import {EntradasServicioService} from '../core/servicios/entradas-servicio.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
  providers:  [EntradasServicioService]
})
export class EntradasPage implements OnInit {
  entradas = this.entradaService.entradas;
  constructor(private entradaService: EntradasServicioService) { }

  ngOnInit(): void{
  }

}
