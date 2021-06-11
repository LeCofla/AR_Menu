import { Component, OnInit } from '@angular/core';
import {PostresServicioService} from "../core/servicios/postres-servicio.service";

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
  providers: [PostresServicioService]
})
export class PostresPage implements OnInit {
  constructor(private postresService: PostresServicioService) { }
  postres = this.postresService.postres;

  ngOnInit() {
  }

}
