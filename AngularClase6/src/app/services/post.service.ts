import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseApiUrl = 'https://jsonplaceholder.typicode.com';
  private apiUrl = `${this.baseApiUrl}/posts`;

  constructor(private http: HttpClient) {}

  //Devolviendo un observable
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        retry(3),
        catchError(error => {
            console.log('Error: ', error);
            return throwError(() => new Error(error.message));
          }
        )
      );
  }

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
      .pipe(
        map((posts: Post[]) => posts.filter((post: Post) => post.userId === userId))
      );
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
