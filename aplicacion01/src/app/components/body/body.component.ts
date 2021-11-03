import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    //Manejo del boton para oculpar el componente
    mostrar = true;
    frase: any = {
        mensaje: "Las desiciones dificiles requieren voluntades fuertes",
        autor : "Thanos- Infinity war "
    }

    //Arreglo de strings 
    personajes: string[] = ["Jon Snow", "Tyron", "Arya Stark", "Sansa Stark"];

}