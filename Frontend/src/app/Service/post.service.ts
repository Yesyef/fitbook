import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Model/post';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'

const baseUrl = 'http://localhost:8080/posts'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly change$ = new Subject<void>();

  title: string;
  category: string;
  content: string;
  likes: number;

  constructor(private http: HttpClient) { }

  public showAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(baseUrl);
  }

  public showPostById(id: number): Observable<Post>{
    return this.http.get<Post>(baseUrl + '/' + id);
  }

  public findPostsByProfileId(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(baseUrl + '?profileId=' + id);
  }

  public findPostByTitle(title): Observable<Post>{
    return this.http.get<Post>(baseUrl + "?title=" + title);
  }

  public findPostByCategory(category): Observable<Post>{
    return this.http.get<Post>(baseUrl + "?category=" + category);
  }

  public findPostByContent(content): Observable<Post>{
    return this.http.get<Post>(baseUrl + "?content=" + content);
  }
  
  public findPostByCountry(country): Observable<Post>{
    return this.http.get<Post>(baseUrl + "?country=" + country);
  }
  
  public findPostByLikes(likes): Observable<Post>{
    return this.http.get<Post>(baseUrl + "?likes=" + likes);
  }

  public createPost(post: Post): Observable<Post>{
    return this.http.post<Post>(baseUrl, post).pipe(tap(() => this.change$.next()));
  }

  public updatePostById(id: number, post: Post): Observable<void>{
    return this.http.put<void>(baseUrl + '/' + id, post).pipe(tap(() => this.change$.next()));
  }

  public deletePostById(id: number): Observable<void>{
    return this.http.delete<void>(baseUrl + '/' + id).pipe(tap(() => this.change$.next()));
  }

}
