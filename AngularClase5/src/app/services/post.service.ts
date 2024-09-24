import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  //Devolviendo un observable
  getPosts() {
    return this.http.get(this.apiUrl);
  }

  //Devolver datos
  getPostsData() {
    this.http.get(this.apiUrl)
      .subscribe({
        next: (posts) => {
          return posts;
        },
        error: (error) => {
          console.error(error);
          return [];
        }
      });
  }

  getById(id: number){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
