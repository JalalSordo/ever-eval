import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EmailService } from '../../service/email.service';
import { Email } from '../../models/email';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @ViewChild('deletedSwal', { static: false }) private deletedSwal: SwalComponent;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  emails: Array<Email>=[];
  selectedRow: Email=new Email("","");

  constructor(private emailService:EmailService) { }

  ngOnInit() {
    this.dtTrigger= new Subject<any>();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      destroy: true

    };
    const emailsObservable = this.emailService.getAllMails();
    emailsObservable.subscribe((emailsData: Email[]) => {
      this.emails = emailsData;
      this.dtTrigger.next();
    });
  }
  open(email){
    this.selectedRow=email;

  }
  deleteEmail(email: Email) {
    this.emailService.deleteEmail(email).subscribe(res => res);
    this.emails.splice(this.emails.indexOf(email), 1);
    this.deletedSwal.show();
  }
  

}
