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
      'Authorization' : 'Bearer BQDg2k_GMDHtWuHgqM3RJ_jiri2CbTMDVoEp5NmYr-dYLAnWVuHrennYfKqPMGyqSCbGrHJCAtAWm8hRMpM'});
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers});
  }


  getArtiste(termino: string ){
    const headers = new HttpHeaders ({
    'Authorization' : 'Bearer BQDg2k_GMDHtWuHgqM3RJ_jiri2CbTMDVoEp5NmYr-dYLAnWVuHrennYfKqPMGyqSCbGrHJCAtAWm8hRMpM'});
  
  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`,{ headers});
}

}
