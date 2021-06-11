import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostresServicioService {
  postres = [
    {
      id: 1,
      tipoId: 'Postres',
      nombre: 'Pastel de Piñones',
      precio: '8.50',
      descripcion:  'La receta mejor guardada de la casa',
      imagen: '/assets/Img/Pastel.jpg'
    },
    {
      id: 2,
      tipoId: 'Postres',
      nombre: 'Torta de Chocolate',
      precio: '4.50',
      descripcion:  'Simplemente irresistible',
      imagen: '/assets/Img/Torta-de-chocolate.jpg'
    },
    {
      id: 3,
      tipoId: 'Postres',
      nombre: 'Pastel de Manzana',
      precio: '8.00',
      descripcion:  'Atrapa en el primer bocado',
      imagen: '/assets/Img/Pastel-de-manzana.jpg'
    },
    {
      id: 4,
      tipoId: 'Postres',
      nombre: 'Pastel con Helado',
      precio: '9.25',
      descripcion:  'Combina a tu gusto con variados sabores de helado',
      imagen: '/assets/Img/Pastel-con-helado.jpg'
    },
  ];

  constructor() { }
}
