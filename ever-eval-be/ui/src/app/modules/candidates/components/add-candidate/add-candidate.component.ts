import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { Candidate } from '../../models/Candidate';
import { CandidateServiceService } from '../../services/candidate-service.service';
import { Level, Techno } from 'src/app/modules/questions/models/question';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-candidate',
	templateUrl: './add-candidate.component.html',
	styleUrls: ['./add-candidate.component.css']
})

export class AddCandidateComponent implements OnInit {

	candidate: Candidate = new Candidate('', '', Level.Default,Techno.Default, 0, false);

	@ViewChild('addSwal', { static: false }) private addSwal: SwalComponent;

	@Input() candidatesList: Candidate[];
	
	candidateFromGroup: FormGroup;

	nameRegularExpression = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';

	constructor(private candidateService: CandidateServiceService, private formBuilder: FormBuilder) {
		//
	}

	ngOnInit() {
		this.candidateFromGroup = this.formBuilder.group({
			'name': ['', Validators.compose([Validators.required, Validators.pattern(this.nameRegularExpression), Validators.minLength(3), Validators.maxLength(30)])],
			'mail': ['', Validators.compose([Validators.required, Validators.email])],
			'level': ['', Validators.required],
			'techno': ['', Validators.required]
		});
	}

	addCandidate(candidate: Candidate) {
		this.candidate = candidate;

		this.candidateService.addCandidate(this.candidate).subscribe(() => {
			this.candidateService.getCandidatebyMail(this.candidate).subscribe(data => {
				this.candidate = data;
				this.candidatesList.push(this.candidate);
				this.candidate = new Candidate('', '', Level.Default,Techno.Default, 0, false);
				document.getElementById('cheat').click();
				this.addSwal.show();

				// Reset the add candidate form
				this.candidateFromGroup.reset();
			});
		});
		
	}
	
}
