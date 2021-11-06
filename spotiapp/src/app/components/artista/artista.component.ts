import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{

  artista:any = {};
  loading: boolean = true;
  constructor(private activatedRoute : ActivatedRoute,
              private  spotifyService: SpotifyService ) { 

  this.activatedRoute.params.subscribe( params => {
    console.log(params['id'])
    this.getArtista(params['id']);
  })
}
  getArtista ( id:string){

    this.loading = true;
    this.spotifyService.getArtist(id).subscribe( artista =>{

      this.artista = artista;
      this.loading = false;
    })
  }


}
