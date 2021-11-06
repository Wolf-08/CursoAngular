//Lo primero que se debe de hacer es importar routes
 
import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

//Creacion del arreglo de rutas

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artista/:id', component: ArtistaComponent},
    //Redirecciona al home si la ruta no existe
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];