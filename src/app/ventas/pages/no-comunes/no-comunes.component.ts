import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Marcos";
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Matias', 'Sergio', 'Marcos'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = "Adriana";
    this.genero = "femenino";
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Marcos',
    edad: 23,
    direccion: 'Mendoza, Argentina'
  }

  //JSON Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(5000); //Emite valores numericos infinitamente a partir de cero

  valorPromesa = new Promise((res, rej) => {

    setTimeout(() => {
      res('Tenemos data de promesa');
    }, 3500)
  });

}
