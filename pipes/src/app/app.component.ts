import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Alejandro Montecillo';
  PI = Math.PI;
  procentaje:number = 0.23123;
  salario:number = 12312.23;

  promesa = new Promise((response) =>{

    setTimeout(() =>{

      response('lledgo la data');
    },3500)
  })

  date = new Date();
}
