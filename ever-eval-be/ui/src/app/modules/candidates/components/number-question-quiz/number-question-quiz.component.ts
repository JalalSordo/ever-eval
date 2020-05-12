import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Candidate } from '../../models/Candidate';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CandidateServiceService } from '../../services/candidate-service.service';
import { QuestionService } from 'src/app/modules/questions/services/question.service';
import { Question, QuizQuestion, Answer, Level, Techno, Type, ProposedResponse } from 'src/app/modules/questions/models/question';
import { Quiz } from 'src/app/modules/quizzes/models/Quiz.model';

@Component({
  selector: 'app-number-question-quiz',
  templateUrl: './number-question-quiz.component.html',
  styleUrls: ['./number-question-quiz.component.css']
})
export class NumberQuestionQuizComponent implements OnInit {
  @ViewChild('convokeSuccessSwal', { static: false }) private convokeSuccessSwal: SwalComponent;
  @ViewChild('convokeFailSwal', { static: false }) private convokeFailSwal: SwalComponent;
  @ViewChild('numberQuestionsFailSwal', { static: false }) private numberQuestionsFailSwal: SwalComponent;
  @ViewChild('convokeFailSwalAll', { static: false }) private convokeFailSwalAll: SwalComponent;
  @ViewChild('convokeSuccessSwalAll', { static: false }) private convokeSuccessSwalAll: SwalComponent;
  @Input() selectedRow: Candidate;
  @Input() candidatesList: Array<Candidate>;
  totalQ: number;
  quizQsts: Array<Question> = [];
  answers: Array<Answer> = [];
  questions: Question[];
  proposedResponses: Array<ProposedResponse> = [];
  quizQuestions: Array<QuizQuestion> = [];
  loading=false;
  public question: Question = new Question(
    '',
    Level.Default,
    Techno.Default,
    Type.Default,
    0,
    0,
    this.proposedResponses
  );
  qq: QuizQuestion = new QuizQuestion(this.question, this.answers);
  quiz: Quiz;
  @Input() showedModal: string;

  constructor(private candidateService: CandidateServiceService, private questionService: QuestionService) { }

  ngOnInit() {
    console.log(this.showedModal);
  }
  createQuiz() {
  this.loading=true;
    if (this.selectedRow.name!="") {
      this.quizCandidate(this.selectedRow);
      this.selectedRow = new Candidate("", "", Level.Default, Techno.Default, 0, false);
    }
    else {
      if (this.candidatesList && this.selectedRow.name=="") {
        this.quizForAllCandidate();
      }
    }


  }
  quizCandidate(candidate: Candidate) {
    console.log("quizCandidate")
    console.log(candidate);
    //get Question with level & techno
    this.questionService
      .findbylevelandtechno(candidate.level, candidate.techno)
      .subscribe(data => {
        this.questions = data;
        if(this.questions.length < this.totalQ){
         this.loading=false;
          this.numberQuestionsFailSwal.show();
          return;
        }
        this.quizQsts = this.getRandomValues(this.questions, this.totalQ);
        console.log(this.quizQsts);
        this.quizQsts.forEach(element => {
          this.qq = new QuizQuestion(element, this.answers);
          this.quizQuestions.push(this.qq);
        });
        this.quiz = new Quiz(candidate.level, candidate.techno, this.quizQuestions, false, false, 0);
        this.quiz.totalQuestion = this.totalQ;
        console.log(this.quiz);
        candidate.quiz = this.quiz;
        this.quizQuestions = [];
        this.candidateService
          .addQuizToC(candidate)
          .subscribe(res => {
            if(res == "Success"){
              document.getElementById('cheatquiz').click();
              this.loading=false;
              this.convokeSuccessSwal.show();
            }
          },
          error=>{
            document.getElementById('cheatquiz').click();
            this.loading=false;
            this.convokeFailSwal.show();
          });
      });

  }
  quizForAllCandidate() {
    console.log("quizForAllCandidate")
    console.log(this.candidatesList);
    this.candidatesList.forEach(element => {
      if (element.quiz === null) {
        //get Question with level & techno
        this.questionService
          .findbylevelandtechno(element.level, element.techno)
          .subscribe(data => {
            this.questions = data;
            this.quizQsts = this.getRandomValues(this.questions, this.totalQ);
            console.log(this.quizQsts);
            this.quizQsts.forEach(element => {
              this.qq = new QuizQuestion(element, this.answers);
              this.quizQuestions.push(this.qq);
            });
            this.quiz = new Quiz(element.level, element.techno, this.quizQuestions, false, false, 0);
            this.quiz.totalQuestion = this.totalQ;
            console.log(this.quiz);
            element.quiz = this.quiz;
            this.quizQuestions = [];
            this.candidateService.addQuizToC(element).subscribe(res => console.log(res));
          });
        document.getElementById('cheatquiz').click();
        this.convokeSuccessSwalAll.show()
      }
    });
  }
  getRandomValues(arr, count) {
    let result = [];
    let _tmp = arr.slice();
    for (var i = 0; i < count; i++) {
      let index = Math.ceil(Math.random() * 10) % _tmp.length;
      result.push(_tmp.splice(index, 1)[0]);
    }
    return result;
  }

}
