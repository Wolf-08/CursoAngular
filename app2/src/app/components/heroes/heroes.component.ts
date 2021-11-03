import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

heros:Heroe[] = []

  //Creacion de un objeto del servicio 
  constructor(private _heroesService: HeroesService,
              private route:Router) { }

  ngOnInit(): void  {
  this.heros = this._heroesService.getHeroes();
  //console.log(this.heros)
  }

verHeroe(idx:number){
  this.route.navigate(['/heroe',idx]);
  console.log(idx);

}
}
