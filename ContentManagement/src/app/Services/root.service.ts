import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { Post } from '../interfaces/post';
import { Comment } from 'src/app/interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  private apiUrl1 = 'http://localhost:3000/users';
  private apiUrl2 = 'http://localhost:3000/post';
  private apiUrl3 = 'http://localhost:3000/comment';

  private apiAddress : string = ''

  constructor(private http : HttpClient) { }

  loginUser(username : string) : Observable<Login>{
    return this.http.get<Login>(this.apiUrl1+`?username=${username}`)
  }

  addPost(post : Post) : Observable<Post>{
    return this.http.post<Post>(this.apiUrl2,post);
  }

  getPost() : Observable<any>{
    return this.http.get<any>(this.apiUrl2); 
  }
  
  deletePost(postId : string) : Observable<any>{
    return this.http.delete<any>(this.apiUrl2+`?postId=${postId}`);
    }
  
  addComment(comment : Comment) : Observable<Comment>{
    return this.http.post<Comment>(this.apiUrl3,comment);
  }
  getComment(postId : string) : Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl3+`?postId=${postId}`);
  }
  deleteComment(commentId : string) : Observable<any>{
    return this.http.delete(this.apiUrl3+`?commentId=${commentId}`);
    }
  deleteCommentByPost(postId : string) : Observable<any>{
      return this.http.delete(this.apiUrl3+`?postId=${postId}`);
      }
    

  

}
