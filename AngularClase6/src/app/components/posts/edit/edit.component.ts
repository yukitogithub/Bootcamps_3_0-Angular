import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

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
    userId!: number;
  
    constructor(private fb: FormBuilder, private postService: PostService, private route: ActivatedRoute) {
      this.postForm = this.fb.group({
        title: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required])
      });
    }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.postService.getById(this.id).subscribe((data: any) => {
        this.postForm.setValue({
          title: data.title,
          body: data.body
        });
        this.userId = data.userId;
      });
    }
  
    onSubmit() {
      if(this.postForm.valid) {
        var post: Post = {
          id: this.id,
          title: this.postForm.value.title,
          body: this.postForm.value.body,
          userId: this.userId
        };
        console.log('Formulario enviado: ', this.postForm.value);
        this.postService.updatePost(this.id, post)
          .subscribe(
            (data: any) => {
              console.log('Post actualizado: ', data);
            }
          );
      }
    }
}
