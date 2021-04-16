import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradasServicioService {
  entradas = [
    {
      id: 1,
      tipoId: 'Entradas',
      nombre: 'Pinchos de Pollo',
      precio: '6.50',
      descripcion:  'Deliciosos pinchos de pollo a la plancha',
      imagen: '/assets/Img/Pinchos.jpg'
    },
    {
      id: 2,
      tipoId: 'Entradas',
      nombre: 'Empanadas',
      precio: '3.50',
      descripcion:  'Empanadas mixtas horneadas',
      imagen: '/assets/Img/Empanadas.jpg'
    },
    {
      id: 3,
      tipoId: 'Entradas',
      nombre: 'Quesadillas',
      precio: '8.00',
      descripcion:  'Quesadillas al estilo tradicional',
      imagen: '/assets/Img/Quesadillas.jpg'
    },
    {
      id: 4,
      tipoId: 'Entradas',
      nombre: 'Antipasto',
      precio: '10.50',
      descripcion:  'Al mejor estilo de la Nona',
      imagen: '/assets/Img/Antipasto.jpg'
    },
  ];
  constructor() { }
}
