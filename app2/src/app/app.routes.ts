//Creacion de las rutas del proyecto 

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

//Arrreglo de rutas, cada ruta es un objeto.
const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent},
{path: 'home', component: AboutComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

