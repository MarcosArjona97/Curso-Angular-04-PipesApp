import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent   {

  nombreLower: string = "marcos";
  nombreUpper: string = "MARCOS";
  nombreCompleto: string = "maRcOs aRjOna";
  
  fecha: Date = new Date();
}
