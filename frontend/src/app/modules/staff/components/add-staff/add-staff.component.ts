import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Role, Staff } from '../../models/staff.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subject } from 'rxjs';

import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-add-staff',
	templateUrl: './add-staff.component.html',
	styleUrls: ['./add-staff.component.css']
})

export class AddStaffComponent implements OnInit {
	staff: Staff = new Staff('', '', '', Role.Default, '');
	@Input() stafflist: Staff[];
	@ViewChild('addSwal', { static: false }) private addSwal: SwalComponent;
	dtTrigger: Subject<any> = new Subject();

	constructor(private staffService: StaffService, private formBuilder: FormBuilder) { }

	addReactiveForm: FormGroup;

	nameRegularExpression = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';

	ngOnInit() {
		this.addReactiveForm = this.formBuilder.group({
			'firstName': ['', Validators.compose([Validators.required, Validators.pattern(this.nameRegularExpression), Validators.minLength(3), Validators.maxLength(30)])],
			'lastName': ['', Validators.compose([Validators.required, Validators.pattern(this.nameRegularExpression), Validators.minLength(3), Validators.maxLength(30)])],
			'mail': ['', Validators.compose([Validators.required, Validators.email, this.checkIfEmailExist()])],
			'role': ['', Validators.required],
			'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			'passwordConfirmation': ['', Validators.compose([Validators.required])]
		}, {
			validator: this.MustMatch('password', 'passwordConfirmation')
		});
	}

	MustMatch(controlName: string, matchingControlName: string) {
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];

			if (matchingControl.errors && !matchingControl.errors.mustMatch) {
				// return if another validator has already found an error on the matchingControl
				return;
			}

			// set error on matchingControl if validation fails
			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({ mustMatch: true });
			} else {
				matchingControl.setErrors(null);
			}
		}
	}

	checkIfEmailExist(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			// Check if control value is not null.
			if (control.value !== null) {
				// Check if email exist by sending http request to the back-end.
				this.staffService.getStaffbyMailString(control.value).subscribe(data => {
					// Check if data is undefined
					if(data){
						if (control.value === data.mail) {
							// Set error object
							control.setErrors({ emailExist: true });
						} else {
							control.setErrors(null);
						}
					}

				});
			}
			return null; // Return null for no error.
		};
	}

	addStaff(staff: Staff) {
		this.staff = staff;
		this.addReactiveForm.reset();
		this.staffService.createStaff(this.staff).subscribe(data => {
			console.log(data);
			this.staffService.getStaffbymail(this.staff).subscribe(data => {
				console.log(data);
				this.staff = data;
				this.stafflist.push(this.staff);
				console.log(this.stafflist);
				this.staff = new Staff('', '', '', Role.Default, '');
				document.getElementById('cheat').click();
				this.addSwal.show();
			});
		});

	}



}
