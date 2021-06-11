import { Component, OnInit } from '@angular/core';
import {PrincipalServicioService} from '../core/servicios/principal-servicio.service';

@Component({
  selector: 'app-principales',
  templateUrl: './principales.page.html',
  styleUrls: ['./principales.page.scss'],
  providers: [PrincipalServicioService]
})
export class PrincipalesPage implements OnInit {
  principales = this.principalesService.principales;
  constructor(private principalesService: PrincipalServicioService) { }

  ngOnInit(): void {
  }

}
