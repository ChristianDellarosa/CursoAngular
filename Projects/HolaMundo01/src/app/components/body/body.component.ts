import {Component} from '@angular/core'


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
 export class BodyComponent {

    mostrar : boolean = false;

    frase: any = {
        mensaje: 'Hola a todo el mundo',
        autor: 'Christian'
    }

    personajes: Array<string> = ['Spiderman','Venom', 'Dr.Optupus'];
}