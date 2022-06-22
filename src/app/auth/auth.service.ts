import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

//import { User } from '../user';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  username: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uriseg = 'http://localhost:5000/api/users';
  private decodedToken;

  constructor(private httpClient: HttpClient) {
    this.decodedToken =
      JSON.parse(localStorage.getItem('auth_meta')!) || new DecodedToken();
  }

  public register(userData: any): Observable<any> {
    const URI = this.uriseg + '/register';
    return this.httpClient.post(URI, userData);
  }

  public login(userData: any): Observable<any> {
    const URI = this.uriseg + '/login';
    return this.httpClient.post(URI, userData).pipe(
      map((token) => {
        return this.saveToken(token);
      })
    );
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  //get userinfo implementieren und in ProfileComp anzeigen wenn user eingeloggt ist
  public getUser(): any {
    const user = localStorage.getItem('auth_tkn');
    console.log(user);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public logout(): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');

    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    console.log(this.decodedToken.exp);
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }
}
