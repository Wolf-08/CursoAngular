import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Servicio is ready");
  }

  //Obtener los 20 nuevos albums desde la api de spotify
  //El http puede ser un return y hacer el subscribe otra vez 
  getReleases(){
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQApGQmjgakPPZW7UKWYakOmjpsJ1jSois27gY9hDtpc7p8rt4wim1ELl_txzvng0ZAEMoFZwWCqKyvXXIs'});
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers});
  }

}
