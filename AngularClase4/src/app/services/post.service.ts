import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  //Devolviendo un observable
  getPosts() {
    return this.http.get(this.apiUrl);
  }

  //Devolver datos
  getPostsData() {
    this.http.get(this.apiUrl)
      .subscribe(
        (posts) => {
          return posts;
        },
        (error) => {
          console.error(error);
          return [];
        }
      );
  }
}
