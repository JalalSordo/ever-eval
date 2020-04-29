import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Staff } from '../../staff/models/staff.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(private router: Router, private httpClient: HttpClient) { }

  login(mail: string, password: string) {
    localStorage.clear();
    const params = new HttpParams().set('mail', mail).set('password', password);
    return this.httpClient.get<Staff>("http://localhost:8080/findStaff", { params }).pipe(
      map(
        userData => {
          sessionStorage.setItem('mail', mail);
          sessionStorage.setItem('password', password);
          return userData;
        }
      )

    );
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['']);
  }
}
