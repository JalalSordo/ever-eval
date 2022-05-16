import { Component, OnInit, Input } from '@angular/core';
import { Staff } from '../../../modules/staff/models/staff.model';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() staff: Staff;
  constructor(private loginService: LoginService) { }

  ngOnInit() { }
  logout() {
    this.loginService.logout();
  }
}
