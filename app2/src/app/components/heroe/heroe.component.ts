import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe,HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {  }
  constructor(private activatedRoute:ActivatedRoute,
              private heroeServvice:HeroesService) { 
  this.activatedRoute.params.subscribe(params=>{
  //Parametro obtenido desde la URL 
    console.log(params['id'])
    this.heroe = this.heroeServvice.getHeroe(params['id']);
    console.log(this.heroe);
  })


  }

  ngOnInit(): void {
  }

}
