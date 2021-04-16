import { Component, OnInit } from '@angular/core';
import {BebidasServicioService} from "../core/servicios/bebidas-servicio.service";

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  providers: [BebidasServicioService]
})
export class BebidasPage implements OnInit {

  constructor(private bebidasService: BebidasServicioService) { }
  bebidas = this.bebidasService.bebidas;

  ngOnInit() {
  }

}
