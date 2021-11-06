import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Servicio is ready");
  }

  getQuery( query:string){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQDWU1QEzIHY4AMj2Htyltuf3C5GyfqDrEg8nBT1figtV4sAvalAdeCE-ooGRN-AA6zcVg1X1Kn_DjpjQfc'});

      return this.http.get(url,{headers});
  }


  //Obtener los 20 nuevos albums desde la api de spotify
  //El http puede ser un return y hacer el subscribe otra vez 
  getReleases(){
    //const headers = new HttpHeaders ({
    // 'Authorization' : 'Bearer BQCuEoQu23Lt_VmAOBpa-SbK4C5rRlXsIDwicLu4AZJrT5kZcEy_eV4HDaLNo-idGI2fcicctaUyzw_HraY'});
    //operador pipe para poder empezar a filtrar la informacion modificacion, se utiliza pipe para poder usar map
    
    return this.getQuery('browse/new-releases?limit=20').pipe( map ( (data:any) => 
    {
      return data.albums.items 
    }));
  }


  getArtiste(termino: string ){
  
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map ( (data:any )=>{
        return data.artists.items;
  }));
}
getArtist(id: string ){
  
  return this.getQuery(`artists/${id}`);
  //.pipe( map ( (data:any )=>{ return data.artists.items;}));
}
 
}
