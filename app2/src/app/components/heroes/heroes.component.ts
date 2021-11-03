import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

heros:Heroe[] = []

  //Creacion de un objeto del servicio 
  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void  {
  this.heros = this._heroesService.getHeroes();
  console.log(this.heros)
  }


}
