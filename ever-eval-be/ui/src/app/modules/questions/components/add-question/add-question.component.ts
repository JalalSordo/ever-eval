import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question, Level, Techno, Type, ProposedResponse } from '../../models/question';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {

  proposedResponses: Array<ProposedResponse> = [];
  proposedResponse: ProposedResponse = new ProposedResponse("", false, 0);
  proposedR: ProposedResponse = new ProposedResponse("", false, 0);

  public question: Question = new Question("", Level.Default, Techno.Default, Type.Default, 0,0, this.proposedResponses);

  @Input() questions: Question[];
  @ViewChild('addSwalQ', { static: false }) private addSwalQ: SwalComponent;
  
  addQuestionReactiveForm: FormGroup;
  addProposedResponseReactiveForm: FormGroup;

  constructor(private questionService: QuestionService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addQuestionReactiveForm = this.formBuilder.group({
			'content': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			'countdown': ['', Validators.compose([Validators.required])],
			'score': ['', Validators.compose([Validators.required])],
			'level': ['', Validators.compose([Validators.required])],
			'techno': ['', Validators.compose([Validators.required])],
      'type': ['', Validators.compose([Validators.required])]
    });

    this.addProposedResponseReactiveForm = this.formBuilder.group({
      'content': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'state': ['', Validators.compose([Validators.required])],
      'score': ['', Validators.compose([Validators.required])]
    });

  }

  addQuestion(addQuestionReactiveForm) {

    this.question = addQuestionReactiveForm;

    addQuestionReactiveForm.proposedResponses = this.proposedResponses;

    this.questionService.add(this.question).subscribe(data => {

      console.log(data);

      this.questionService.findbycontent(this.question.content).subscribe(data => {

        this.question = data;
        this.questions.push(this.question);
        //console.log(this.questions);
        this.proposedResponses = [];
        this.question = new Question("", Level.Default, Techno.Default, Type.Default, 0, 0, this.proposedResponses);
        document.getElementById('addQst').click();
        this.addSwalQ.show();

      });

    });

    // Reset the form
    this.addQuestionReactiveForm.reset();
    this.addProposedResponseReactiveForm.reset();

  }

  listPR(addProposedResponseReactiveForm: ProposedResponse) {

    this.proposedResponses.push(addProposedResponseReactiveForm);
    this.addProposedResponseReactiveForm.reset();
    
    this.proposedResponse = new ProposedResponse("", false,0);
    console.log(this.proposedResponses);
    
    return this.proposedResponses;
  }

}
