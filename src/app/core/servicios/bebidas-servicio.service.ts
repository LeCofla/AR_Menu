import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BebidasServicioService {
  bebidas = [
    {
      id: 1,
      tipoId: 'Bebidas',
      nombre: 'Café',
      precio: '2.50',
      descripcion:  'Prueba un autentico café de altura',
      imagen: '/assets/Img/Cafe.jpg'
    },
    {
      id: 2,
      tipoId: 'Bebidas',
      nombre: 'Smoothie',
      precio: '3.50',
      descripcion:  'Mix de deliciosas frutas en un smoothie',
      imagen: '/assets/Img/Smoothie.jpg'
    },
    {
      id: 3,
      tipoId: 'Bebidas',
      nombre: 'Té',
      precio: '8.00',
      descripcion:  'Nada más digestivo que un té caliente',
      imagen: '/assets/Img/Te.jpg'
    },
    {
      id: 4,
      tipoId: 'Bebidas',
      nombre: 'Cerveza',
      precio: '3.25',
      descripcion:  'Aliados con el mejor maestro cervecero del sector',
      imagen: '/assets/Img/Cerveza.jpg'
    },
  ];

  constructor() { }
}
