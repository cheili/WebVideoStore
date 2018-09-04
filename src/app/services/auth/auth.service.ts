import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';


const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {

    return this.http.post<any>("http://localhost:8080/login",
      JSON.stringify({"username": username, "password": password})).pipe(map(user => {

        if (user && user.token) {

          localStorage.setItem('currentUser', JSON.stringify(user));

        }

        return user;
      }

      ));

  }

  logout() {

    localStorage.removeItem('currentUser');
  }
}
