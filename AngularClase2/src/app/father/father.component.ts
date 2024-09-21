import { Component } from '@angular/core';
import { SonComponent } from '../son/son.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [ SonComponent, NgFor, NgIf ],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  mensaje: string = "Hola, soy tu padre";
  mensajesHijo: string[] = [];

  recibirMensaje($event: string) {
    this.mensajesHijo.push($event);
  }
}
