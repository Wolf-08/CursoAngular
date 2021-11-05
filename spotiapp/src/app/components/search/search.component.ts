import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }


//Obtencion de la informacion a traves del servicio y conexion a api spotify
  buscar(termino:string){
    console.log(termino);

    this.spotifyService.getArtiste(termino)
    .subscribe( (data:any) => {
      console.log(data.artists.items);
      this.artistas = data.artists.items;
    });
  }
}
