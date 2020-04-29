import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/modules/staff/models/staff.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

// This component provides a container
// which purpose is to provide a routing outlet
// for all the app features (sub-Modules)
// in addition to contain the repeatedly required
// components (header, menu...)
export class ContainerComponent implements OnInit {
  staff: Staff;
  constructor(private router: Router) { }

  ngOnInit() {
    this.staff = JSON.parse(sessionStorage.getItem('connectedStaff'));
  }

  // This function exists in order to test for login page
  // in order to avoid rendering heade/menu on browser
  displayMenu() {
    return this.router.url !== '/login';
  }
}
