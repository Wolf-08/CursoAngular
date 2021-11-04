//Creacion de las rutas del proyecto 

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from "./components/heroe/heroe.component";
import { HeroeEncontradoComponent } from "./components/heroe-encontrado/heroe-encontrado.component";

//Arrreglo de rutas, cada ruta es un objeto.
const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'heroes', component: HeroesComponent},
{path: 'heroe/:id', component: HeroeComponent},
{path: 'buscar/:nombre', component: HeroeEncontradoComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

