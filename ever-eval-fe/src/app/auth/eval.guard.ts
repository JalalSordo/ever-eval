import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../modules/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class EvalGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  // Test applied to authenticate Evaluator
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  // checks wether there is a logged in user
  // and wether that user is an evaluator
  checkLogin(url: string): boolean {
    if (
      sessionStorage.getItem('isLoggedIn') &&
      JSON.parse(sessionStorage.getItem('connectedStaff')).role === 'EVALUATOR'
    ) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.loginService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['']);
    return false;
  }
}
