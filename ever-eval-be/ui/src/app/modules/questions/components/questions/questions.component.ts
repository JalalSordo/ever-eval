import { Component, OnInit, ViewChild } from '@angular/core';
import { Question, Level, Techno, Type, ProposedResponse } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Subject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @ViewChild('deletedSwal', { static: false }) private deletedSwal: SwalComponent;
  dtOptions: DataTables.Settings = {};
  public questions: Array<Question> = [];
  ProposedResponses: Array<ProposedResponse> = [];
  public selectedRow: Question = new Question("", Level.Default, Techno.Default, Type.Default, 0, 0, this.ProposedResponses);

  dtTrigger: Subject<any> = new Subject();

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100

    };
    const questionsObservable = this.questionService.getAll();
    questionsObservable.subscribe((questionsData: Question[]) => {
      this.questions = questionsData;
      this.dtTrigger.next();
      console.log(this.questions);
    });
  }

  open(question) {
    this.selectedRow = question;
  }
  deleteQuestion(question: Question) {
    this.questionService.delete(question).subscribe(data => {
      console.log(data);
      this.questions.splice(this.questions.indexOf(question), 1);
      this.deletedSwal.show();
    });
  }

}
