import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../modules/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  // Test applied to authenticate Admin
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log(url)

    return this.checkLogin(url);
  }

  // checks wether there is a logged in user
  // and wether that user is an admin
  checkLogin(url: string): boolean {
    if (
      sessionStorage.getItem('isLoggedIn') &&
      JSON.parse(sessionStorage.getItem('connectedStaff')).role === 'ADMIN'
    ) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.loginService.redirectUrl = url;

    // Navigate to the login page
    this.router.navigate(['']);
    return false;
  }
}
