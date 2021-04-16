import { Component, OnInit } from '@angular/core';
import {CoctelesServicioService} from "../core/servicios/cocteles-servicio.service";

@Component({
  selector: 'app-cocteles',
  templateUrl: './cocteles.page.html',
  styleUrls: ['./cocteles.page.scss'],
  providers: [CoctelesServicioService]
})
export class CoctelesPage implements OnInit {

  constructor(private coctelesService: CoctelesServicioService) { }
    cocteles = this.coctelesService.cocteles;
  ngOnInit() {
  }

}
