import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Staff, Role } from '../../models/staff.model';
import { StaffService } from '../../services/staff.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-delete-staff',
  templateUrl: './delete-staff.component.html',
  styleUrls: ['./delete-staff.component.css']
})
export class DeleteStaffComponent implements OnInit {
  @Input() staff: Staff;
  @Input() stafflist: Staff[];
  @ViewChild('deleteSwal', { static: false }) private deleteSwal: SwalComponent;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    //console.log(this.staff);
    //console.log(this.stafflist);
  }

  delete() {
    console.log(this.stafflist);
    this.staffService.deleteStaff(this.staff).subscribe(data => {
      this.stafflist.splice(this.stafflist.indexOf(this.staff), 1);
      console.log(this.stafflist);
      this.deleteSwal.show();
    });
  }

}
