import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if(form.valid) {
      console.log('Formulario válido: ', this.model);
      console.log('Formulario enviado: ', form.value);
    }
  }
}
