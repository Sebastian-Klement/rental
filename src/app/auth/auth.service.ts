import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  userUrl: string = '/api/users';
  response: any;

  addUser(user: User): Observable<User> {
    return (this.response = this.httpClient.post<User>(this.userUrl, user));
  }

  getUser(): Observable<User[]> {
    return (this.response = this.httpClient.get<User[]>(this.userUrl));
  }
}
