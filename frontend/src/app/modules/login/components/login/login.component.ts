import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Staff } from '../../../staff/models/staff.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail: string;
  password: string;
  public staff: Staff;
  redirectUrl: string;
  isLoggedIn = false;
  NotYet = false;

  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('isLoggedIn')) {
      this.router.navigate([JSON.parse(sessionStorage.getItem('connectedStaff')).role]);
    }
  }

  login() {
    this.loginservice.login(this.mail, this.password).subscribe(staffData => {
      console.log(this.mail);
      console.log(this.password);
      sessionStorage.clear();
      console.log(staffData);
      if (staffData !== null) {
        this.redirectUrl = `${staffData.role}`;
        console.log(this.redirectUrl);
        this.isLoggedIn = true;
        sessionStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
        sessionStorage.setItem('connectedStaff', JSON.stringify(staffData));
        localStorage.setItem('bearerToken',staffData.jwttoken);
        console.log(staffData.jwttoken);
        this.router.navigate([this.redirectUrl]);
      } else {
        alert('password or email are wrong');
        this.isLoggedIn = false;
      }
    },
    (error: any) => {
      console.log(error);
      if(error.status == 401)
      {
         this.NotYet = true;

         setTimeout(() =>this.NotYet = false , 3000)
      }
      return false;   //<- return false in case of error
    });
  }
}
