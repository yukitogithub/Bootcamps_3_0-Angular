import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';

interface Post {
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  
    postForm!: FormGroup;
  
    constructor(private fb: FormBuilder, private postService: PostService) {
      this.postForm = this.fb.group({
        title: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required])
      });
    }
  
    ngOnInit(): void {
    }
  
    onSubmit() {
      if(this.postForm.valid) {
        var newPost: Post = {
          title: this.postForm.value.title,
          body: this.postForm.value.body,
          userId: 1
        };
        console.log('Formulario enviado: ', this.postForm.value);
        this.postService.createPost(newPost)
          .subscribe(
            (data: any) => {
              console.log('Post creado: ', data);
            }
          );
      }
    }
}
