import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Question, ProposedResponse } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-edit-question',
	templateUrl: './edit-question.component.html',
	styleUrls: ['./edit-question.component.css']
})

export class EditQuestionComponent implements OnInit {
	
	@Input() selectedRow: Question;

	@Input() questions: Question[];

	@ViewChild('editSwal', { static: false }) private editSwal: SwalComponent;
	test: string = 'testing';

	editQuestionReactiveForm: FormGroup;
	editProposedResponseReactiveForm: FormGroup;
	
	addProposedResponseReactiveForm: FormGroup;
	
	proposedResponses :ProposedResponse[];
	
	constructor(private questionService: QuestionService, private formBuilder: FormBuilder) {
		//
	}
	
	ngOnInit() {
		//
	}
	
	ngOnChanges(){
		this.proposedResponses = [];
		this.proposedResponses.push(...this.selectedRow.proposedResponses);
		
		this.editQuestionReactiveForm = this.formBuilder.group({
			'content': [this.selectedRow.content, Validators.compose([Validators.required, Validators.minLength(3)])],
			'countdown': [this.selectedRow.countdown, Validators.compose([Validators.required])],
			'score': [this.selectedRow.score, Validators.compose([Validators.required])],
			'level': [this.selectedRow.level, Validators.compose([Validators.required])],
			'techno': [this.selectedRow.techno, Validators.compose([Validators.required])],
			'type': [this.selectedRow.type, Validators.compose([Validators.required])],
			'proposedResponses': [this.proposedResponses],
			'id': [this.selectedRow.id]
		});

		
		this.addProposedResponseReactiveForm = this.formBuilder.group({
			'content': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			'state': ['', Validators.compose([Validators.required])],
			'score': ['', Validators.compose([Validators.required])]
		});
	}
	
	// Add proposed responses
	addProposedResponseQuestion(addProposedResponseReactiveForm: ProposedResponse){
		console.log(addProposedResponseReactiveForm);
		this.proposedResponses.push(addProposedResponseReactiveForm);
		this.addProposedResponseReactiveForm.reset();
	}
	
	// Update field when focus out from text input
	updateField(event, index){
		this.proposedResponses[index][event.target.name] = event.target.value;
	}

	// Delete proposed responses
	deleteProposedResponses(index){
		this.proposedResponses.splice(this.proposedResponses.indexOf(this.proposedResponses[index]), 1);
	}
	
	// Edit proposed responses
	editQuestion(questionedit: Question) {
		
		questionedit.proposedResponses = this.proposedResponses;
		
		this.questionService.edit(questionedit).subscribe(data => {

			// update the question array in questions parent component
			this.questions.forEach((question, index) => {
				if(question.id === questionedit.id) {
					console.log(questionedit.id)
					this.questions[index] = questionedit;
				}
			});

			document.getElementById('editQst').click();
			this.editSwal.show();
		});
		
	}
	
}
