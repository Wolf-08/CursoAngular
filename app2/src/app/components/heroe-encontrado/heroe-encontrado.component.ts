import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe-encontrado',
  templateUrl: './heroe-encontrado.component.html',
  styleUrls: ['./heroe-encontrado.component.css']
})
export class HeroeEncontradoComponent implements OnInit {

  heroe:any = {  }
  nombre:string = '';
  constructor(private activatedRoute:ActivatedRoute,
    private heroeServvice:HeroesService,
    private route:Router) { 
      
      this.activatedRoute.params.subscribe(params=>{
        //Parametro obtenido desde la URL 
          this.nombre = params['nombre'];
          this.heroe = this.heroeServvice.buscarHeroe(params['nombre']);
          console.log(this.heroe);
        })
    }

  ngOnInit(): void {
  }

  verHeroe(idx:number){
    this.route.navigate(['/heroe',idx]);
    console.log(idx);
}

}
