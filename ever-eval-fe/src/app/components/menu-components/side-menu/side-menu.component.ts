import { Component, OnInit, Input } from '@angular/core';
import { SideMenu } from '../../../models/side-menu.model';
import { Staff } from '../../../modules/staff/models/staff.model';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  // This is a staff for test
  @Input() staff: Staff;

  menuElements: SideMenu[];

  constructor() { }

  ngOnInit() { }
}
