import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroeService: HeroesService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }
  buscarHeroe(heroe:string){
    console.log(heroe)
    //let heroeEncontrado = this.heroeService.buscarHeroe(heroe);
    //console.log(heroeEncontrado);
    this.route.navigate(['/buscar',heroe]);
  }



}
