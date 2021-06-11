import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoctelesServicioService {
  cocteles = [
    {
      id: 1,
      tipoId: 'Cocteles',
      nombre: 'Dry Martini',
      precio: '6.50',
      descripcion:  'Un clásico que siempre viene bien',
      imagen: '/assets/Img/Martini.jpg'
    },
    {
      id: 2,
      tipoId: 'Cocteles',
      nombre: 'Brandy',
      precio: '4.50',
      descripcion:  'Para degustar y digerir',
      imagen: '/assets/Img/Brandy.jpg'
    },
    {
      id: 3,
      tipoId: 'Cocteles',
      nombre: 'Margarita',
      precio: '8.00',
      descripcion:  'A encender los motores',
      imagen: '/assets/Img/Margarita.jpg'
    },
    {
      id: 4,
      tipoId: 'Cocteles',
      nombre: 'Mojito',
      precio: '5.50',
      descripcion:  'Disfruta de su dulce sabor',
      imagen: '/assets/Img/Mojito.jpg'
    },
  ];
  constructor() { }
}
