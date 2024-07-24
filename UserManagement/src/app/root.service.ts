import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  private apiUrl = 'http://localhost:3000/users';

  private apiAddress : string = ''

  constructor(private http : HttpClient) { }

  registerUser(user : User) : Observable<User>{
    return this.http.post<User>(this.apiUrl,user);
  }

  getUser() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
}
