import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  paises: any []=[] ;
  nuevasCanciones: any []=[] ;
  loading: boolean = true;
  


  constructor(private http:HttpClient, private spotifyService : SpotifyService ) {
    
    //Ejemplo de como usar una peticion http con paises 
    // console.log("Constructor del log");
    // this.http.get('https://restcountries.com/v2/lang/es')
    // .subscribe(  (respuesta:any) =>{
    //   this.paises = respuesta;
    //   console.log(respuesta);
    //   }
    // );

    //Obtencion de la informacion de los albums para mostrarlos en tarjetas 
    //Operador map swith para elegir el tipo de informacion ue se necesita
    this.spotifyService.getReleases()
    .subscribe((data:any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
