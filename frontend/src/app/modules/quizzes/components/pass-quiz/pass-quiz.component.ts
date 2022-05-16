import { Component, OnInit, Input, ViewChild, PipeTransform, Pipe, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Answer, Question, Level, Techno, ProposedResponse, Type, QuizQuestion } from 'src/app/modules/questions/models/question';
import { Quiz } from '../../models/Quiz.model';
import { QuizService } from '../../services/quiz.service';

import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pass-quiz',
  templateUrl: './pass-quiz.component.html',
  styleUrls: ['./pass-quiz.component.css']
})
export class PassQuizComponent implements OnInit {
  @ViewChild('quizSwal', { static: false }) private quizSwal: SwalComponent;
  @Output() done: EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedQuiz: Quiz;
  @Input() index: number;
  @Input() counter: number;
  quizQuestions: Array<QuizQuestion> = [];
  quiz: Quiz;
  selectedAns: string = "";
  SelectionStatusOfMutants: any = [];
  answer: Answer = new Answer(0, "");
  ansCheckbox: Array<Answer> = [];
  content: string = "";
  ans: string;
  ProposedResponses: Array<ProposedResponse> = [];
  question: Question = new Question("", Level.Default, Techno.Default, Type.Default, 0, 0, this.ProposedResponses);
  isZero: Boolean;
  contentText: string;
  contentradio: string;
  countDown;
  //counter: number;
  tick = 1000;
  //time: number = 5;
  quizIndex: number;
  quizSwalDone=false;
  
  
  constructor(private quizService: QuizService, private cdref: ChangeDetectorRef) { }


  ngOnInit() {
    this.isZero = false;

  }
  //Get the radio button answer
  radioChangeHandler(content: string) {
    this.selectedAns = content;
    this.answer = new Answer(0, this.selectedAns);
  }
  //Get the checkbox button answers
  checkboxChangeHandler(checked: boolean, content: string) {
    if (checked === true) {
      this.answer = new Answer(0, content);
      this.ansCheckbox.push(this.answer);

    }
    if (checked === false) {
      let removeIndex = this.ansCheckbox.findIndex(itm => itm === this.answer);
      if (removeIndex !== -1) {
        this.ansCheckbox.splice(removeIndex, 1);

      }
    }
  }
  //To submit the answers & insert to database
  submit() {
    if (this.selectedQuiz.quizQuestions[this.index].type === "RADIO") {
      this.selectedQuiz.quizQuestions[this.index].answers[0] = this.answer;
      this.answer = new Answer(0, "");
    }
    if (this.selectedQuiz.quizQuestions[this.index].type === "CHECKBOX") {
      this.selectedQuiz.quizQuestions[this.index].answers = this.ansCheckbox;
      this.ansCheckbox = [];
      this.answer = new Answer(0, "");
    }
    if (this.selectedQuiz.quizQuestions[this.index].type === "TEXTFIELD" || this.selectedQuiz.quizQuestions[this.index].type === "TEXTAREA") {
      this.selectedQuiz.quizQuestions[this.index].answers[0] = this.answer;
      this.answer = new Answer(0, "");
    }
    if (this.index < this.selectedQuiz.quizQuestions.length) {
      this.index++;
    }
    if (this.index >= this.selectedQuiz.quizQuestions.length) {
      this.quizService.postQuizAnswers(this.selectedQuiz).subscribe(res => {
        this.done.emit("true");
        this.selectedQuiz.done = true;
        document.getElementById('cheatQuiz').click();
        if(!this.quizSwalDone){
      		this.quizSwal.show();
        	this.quizSwalDone = true;
      	}
      });
      
    }

  }
  //the first countDown "execute when index=0 & counter=time"
  countDownf() {
    this.quizIndex = this.selectedQuiz.quizQuestions.length;
    this.cD(this.selectedQuiz.quizQuestions[0].countdown);
  }
  //countDown
  cD(tmp) {
    this.counter = tmp;
    this.countDown = Observable.timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter);
    this.isZero = false; 
  }
  //restart the countdown when counter=0
  countD() {
    if (this.index < this.quizIndex) {
      if (this.index + 1 < this.quizIndex) {
        this.cD(this.selectedQuiz.quizQuestions[this.index + 1].countdown);
      }
      this.submit();
      if (this.index === this.selectedQuiz.quizQuestions.length) {
      	this.done.emit("true");
        this.selectedQuiz.done = true;
      	document.getElementById('cheatQuiz').click();
      	if(!this.quizSwalDone){
      		this.quizSwal.show();
        	this.quizSwalDone = true;
      	}
      }
    }
    else {
      if (this.index >= this.quizIndex) {
      	document.getElementById('cheatQuiz').click();
      	this.done.emit("true");
        this.selectedQuiz.done = true;
      } 

    }
  }
  //verify if counter equel to 0
  TestOfCount(N) {
    if (N === 0) {
      this.isZero = true;
    }
    return this.isZero;
  }
  //to fix ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'ngIf: true'. Current value: 'ngIf: false'.
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  //when we click in "close" button
  stop() {
    this.index = this.selectedQuiz.quizQuestions.length;
    this.counter = 0;
    if (this.index >= this.selectedQuiz.quizQuestions.length) {
      this.selectedQuiz.done = true;
      this.done.emit("true");
      if(!this.quizSwalDone){
      	this.quizSwal.show();
        this.quizSwalDone = true;
      }
      
    }

  }

}
@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

}