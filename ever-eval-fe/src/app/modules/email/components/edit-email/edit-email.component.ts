import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Email } from '../../models/email';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../service/email.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
	selector: 'app-edit-email',
	templateUrl: './edit-email.component.html',
	styleUrls: ['./edit-email.component.css']
})
export class EditEmailComponent implements OnInit {
	@ViewChild('editSwal', { static: false }) private editSwal: SwalComponent;
	@Input() email: Email;
	@Input() emails: Array<Email>;
	emailFromGroup: FormGroup;

	nameRegularExpression = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';

	constructor(private emailService: EmailService, private formBuilder: FormBuilder) { }

	ngOnInit() {
	}

	ngOnChanges() {
		console.log(this.email);
		this.emailFromGroup = this.formBuilder.group({
			'id': [this.email.id],
			'subject': [this.email.subject, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
			'messageText': [this.email.messageText, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(5000)])],
		});
	}

	editEmail(email: Email) {

		this.emailService.editEmail(email).subscribe(data => {

			// update the candidate array in candidates parent component
			this.emails.forEach((candidate, index) => {
				if (candidate.id === email.id) {
					this.emails[index] = email;
				}
			});
			document.getElementById('cheat2').click();
			this.editSwal.show();
		});
	}


}
