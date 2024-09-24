import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  
    postForm!: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.postForm = this.fb.group({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
      });
    }
  
    ngOnInit(): void {
    }
  
    onSubmit() {
      if(this.postForm.valid) {
        console.log('Formulario enviado: ', this.postForm.value);
      }
    }
}
