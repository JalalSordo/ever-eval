import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Staff } from '../../models/staff.model';
import { StaffService } from '../../services/staff.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-edit-staff',
	templateUrl: './edit-staff.component.html',
	styleUrls: ['./edit-staff.component.css']
})

export class EditStaffComponent implements OnInit {
	@Input() selectedRow: Staff;
	@Input() staffs: Staff[];
	@ViewChild('editSwal', { static: false }) private editSwal: SwalComponent;
	
	editReactiveForm: FormGroup;
	
	nameRegularExpression = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';
	
	constructor(private staffService: StaffService, private formBuilder: FormBuilder) {
		//
	}
	
	ngOnInit() {
		//
	}
	
	ngOnChanges() {
		
		// Validation
		this.editReactiveForm = this.formBuilder.group({
			'firstName': [this.selectedRow.firstName, Validators.compose([Validators.required, Validators.pattern(this.nameRegularExpression), Validators.minLength(3), Validators.maxLength(30)])],
			'lastName': [this.selectedRow.lastName, Validators.compose([Validators.required, Validators.pattern(this.nameRegularExpression), Validators.minLength(3), Validators.maxLength(30)])],
			'mail': [this.selectedRow.mail, Validators.compose([Validators.required, Validators.email, this.checkIfEmailExist()])],
			'role': [this.selectedRow.role, Validators.required],
			'password': [this.selectedRow.password, Validators.compose([Validators.required, Validators.minLength(6)])]
		});
		
	}
	
	checkIfEmailExist(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			// Check if control value is not null.
			if (control.value !== null) {
				// Check if email exist by sending http request to the back-end.
				this.staffService.getStaffbyMailString(control.value).subscribe(data => {
					// Check if data is undefined
					if(data){
						// Check if user has left his exist email address and can insert new unique
						if (control.value === data.mail && this.selectedRow.id !== data.id) {
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
	
	edit(id, staffedit: Staff) {
		staffedit.id = id;
		console.log(staffedit);
		this.staffService.editStaff(staffedit).subscribe(data => {
			
			// update the staff array in staffs parent component
			this.staffs.forEach((staff, index, staffs) => {
				if(staff.id === staffedit.id) {
					this.staffs[index] = staffedit;
				}
			});
			
			document.getElementById('cheatEditStaff').click();
			this.editSwal.show();
		});
	}
	
}
