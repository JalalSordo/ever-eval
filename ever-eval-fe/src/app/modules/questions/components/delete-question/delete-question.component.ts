import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questions: Question[];
  @ViewChild('deleteSwal', { static: false }) private deleteSwal: SwalComponent;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }
  deleteQuestion() {
    this.questionService.delete(this.question).subscribe(data => {
      this.questions.splice(this.questions.indexOf(this.question), 1);
      document.getElementById('deleteQst').click();
      this.deleteSwal.show();
    });

  }
}
