import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent {
  @Input() nombre: string = "Sin nombre";
  @Output() salida: EventEmitter<string> = new EventEmitter<string>();
  mostrar: boolean = false;

  mostrarDiv(){
    this.mostrar = !this.mostrar;
    this.salida.emit("Se emitió un mensaje desde el hijo");
  }
}
