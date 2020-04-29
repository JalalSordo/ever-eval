import { Component, OnInit, Input } from '@angular/core';
import { SideMenu } from '../../../models/side-menu.model';
import { SideMenuService } from '../../../services/side-menu.service';
import { Staff } from '../../../modules/staff/models/staff.model';

@Component({
  selector: 'app-side-menu-element',
  templateUrl: './side-menu-element.component.html',
  styleUrls: ['./side-menu-element.component.css']
})
export class SideMenuElementComponent implements OnInit {
  elements: SideMenu[];
  @Input() staff: Staff;

  constructor(private service: SideMenuService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements() {
    this.service.getElements().subscribe(elements => (this.elements = elements));
  }
}
