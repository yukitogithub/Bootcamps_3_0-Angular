import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  
    postForm!: FormGroup;
    id!: number;
  
    constructor(private fb: FormBuilder, private postService: PostService, private route: ActivatedRoute) {
      this.postForm = this.fb.group({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
      });
    }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.postService.getById(this.id).subscribe((data: any) => {
        this.postForm.setValue({
          title: data.title,
          description: data.body
        });
      });
    }
  
    onSubmit() {
      if(this.postForm.valid) {
        console.log('Formulario enviado: ', this.postForm.value);
      }
    }
}
