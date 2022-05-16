import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { Email } from '../../models/email';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {
  @ViewChild('addSwal', { static: false }) private addSwal: SwalComponent;
  @ViewChild('subjectSwal', { static: false }) private subjectSwal: SwalComponent;
  @Input() emails: Array<Email>;
  email: Email = new Email("", "");

  emailFromGroup: FormGroup;

  //nameRegularExpression = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailFromGroup = this.formBuilder.group({
      'subject': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30), this.existSubject()])],
      'messageText': ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(5000)])]
    });
  }

  existSubject(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value !== null) {
        this.emailService.getMailBySubject(control.value).subscribe(data => {
          if (control.value === data.subject) {
            control.setErrors({ subjectExist: true });
          }
          else {
            control.setErrors(null);
          }
        }
        )
      }
      return null;
    }
    
  }
  addEmail(mail: Email) {
    this.emailService.getMailBySubject(mail.subject).subscribe(data => {
      console.log(data);
        this.emailService.addMail(mail).subscribe(
          () => {
            console.log(mail);
            this.emailService.getMailBySubject(mail.subject).subscribe(data => {
              console.log(data);
              this.email = data;
              this.emails.push(this.email);
              this.email = new Email("", "");
              document.getElementById('cheat').click();
              this.addSwal.show();
              // Reset the add candidate form
              this.emailFromGroup.reset();
            });
          });
    });


  }

}
