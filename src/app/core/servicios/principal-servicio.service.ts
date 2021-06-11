import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalServicioService {
  principales = [
    {
      id: 1,
      tipoId: 'Plato Central',
      nombre: 'Pizza',
      precio: '12.50',
      descripcion:  'Auntentica masa italiana',
      imagen: '/assets/Img/Pizza.jpg'
    },
    {
      id: 2,
      tipoId: 'Plato Central',
      nombre: 'Hamburguesa',
      precio: '9.75',
      descripcion:  'Deliciosa carne Angus importada',
      imagen: '/assets/Img/Hamburguesa.jpg'
    },
    {
      id: 3,
      tipoId: 'Plato Central',
      nombre: 'Quesadillas',
      precio: '8.00',
      descripcion:  'Quesadillas al estilo tradicional',
      imagen: '/assets/Img/Quesadillas.jpg'
    },
    {
      id: 4,
      tipoId: 'Plato Central',
      nombre: 'Sopa de Calabaza',
      precio: '5.50',
      descripcion:  'La apuesta más ligera y nutritiva',
      imagen: '/assets/Img/Sopa de calabaza.jpg'
    },
  ];

  constructor() { }
}
