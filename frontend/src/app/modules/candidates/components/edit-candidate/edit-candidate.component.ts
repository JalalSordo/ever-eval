import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CandidateServiceService } from '../../services/candidate-service.service';
import { Candidate } from '../../models/Candidate';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-edit-candidate',
	templateUrl: './edit-candidate.component.html',
	styleUrls: ['./edit-candidate.component.css']
})

export class EditCandidateComponent implements OnInit {
	
	@ViewChild('editSwal', { static: false }) private editSwal: SwalComponent;
	
	@Input() selectedRow: Candidate;

	@Input() candidatesList: Candidate[];	

	candidateFromGroup: FormGroup;

	nameRegularExpression = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';
	
	constructor(private candidateService: CandidateServiceService, private formBuilder: FormBuilder) {
		//
	}

	ngOnInit() {
		//
	}

	ngOnChanges() {
		this.candidateFromGroup = this.formBuilder.group({
			'id': [this.selectedRow.id],
			'name': [this.selectedRow.name, Validators.compose([Validators.required, Validators.pattern(this.nameRegularExpression), Validators.minLength(3), Validators.maxLength(30)])],
			'mail': [this.selectedRow.mail, Validators.compose([Validators.required, Validators.email])],
			'level': [this.selectedRow.level, Validators.required],
			'techno': [this.selectedRow.techno, Validators.required]
		});
	}

	editCandidate(candidateedit: Candidate) {

		this.candidateService.updateCandidate(candidateedit).subscribe(data => {

			// update the candidate array in candidates parent component
			this.candidatesList.forEach((candidate, index) => {
				if(candidate.id === candidateedit.id) {
					this.candidatesList[index] = candidateedit;
				}
			});

			document.getElementById('cheat2').click();
			this.editSwal.show();
		});
	}

}
