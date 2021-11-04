import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Input Es comunicacion del padre el hijo 
  @Input() heroe:any = {}
  @Input () index:number | undefined;

  //Output Es comunicacion del hijo al padre 
  //Output Es comunicacion del hijo al padre 

  @Output()
  heroeSeleccionado!: EventEmitter<number>;


  constructor(private route:Router) { 
    //Se debe inicializar el eventEmmiter 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verHeroe(){
  //  console.log(this.index)
   this.route.navigate(['/heroe',this.index]);
  //this.heroeSeleccionado.emit(this.index);

  
  }
}
