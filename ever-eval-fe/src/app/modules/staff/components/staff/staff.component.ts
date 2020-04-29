import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import { Staff, Role } from '../../models/staff.model';
import { StaffService } from '../../services/staff.service';
import { Subject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  @ViewChild('deletedSwal', { static: false }) private deletedSwal: SwalComponent;
  //@ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  public staffs: Array<Staff> = [];
  //public staff:Staff;
  p: number = 1;
  public selectedRow: Staff = new Staff("", "", "", Role.Default, "");
  dtTrigger: Subject<any> = new Subject();
  //private modalRef: NgbModalRef;
  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.dtTrigger= new Subject<any>();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      destroy: true

    };
    const staffsObservable = this.staffService.finAll();
    staffsObservable.subscribe((staffsData: Staff[]) => {
      this.staffs = staffsData;
      this.dtTrigger.next();
    });
  }


  getStaffs() {
    this.staffService.finAll().subscribe(data => {
      this.staffs = data;
    })
  }
  open(staff) {
    //console.log(staff);
    this.selectedRow = staff;//{id:staff.id, first: staff.firstName, last:staff.lastName};
    //console.log(this.selectedRow);
  }
  edit(staffedit: Staff) {
    console.log(staffedit);
    this.staffService.editStaff(staffedit).subscribe(data => { data; });
  }
  delete(staff: Staff) {
    console.log(this.staffs);
    this.staffService.deleteStaff(staff).subscribe(data => {
      this.staffs.splice(this.staffs.indexOf(staff), 1);
      console.log(this.staffs);
     // document.getElementById('cheatdeletestaff').click();
      this.deletedSwal.show();
    });
  }


}
