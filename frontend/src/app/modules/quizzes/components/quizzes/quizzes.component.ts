import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/Quiz.model';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestion, Level, Techno } from 'src/app/modules/questions/models/question';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  quizes: Array<Quiz> = [];
  quizQuestions: Array<QuizQuestion> = [];
  selectedQuiz: Quiz = new Quiz(Level.Default, Techno.Default, this.quizQuestions, false, false,0);
  selectedQuizEval: Quiz = new Quiz(Level.Default, Techno.Default, this.quizQuestions, false, false,0);
  dtTrigger: Subject<any> = new Subject();
  index: number;
  time: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10

    };
    /*
      1 load all quizes
    */
    const quizesObservable = this.quizService.getAll();
    quizesObservable.subscribe((quizesData: Quiz[]) => {
      this.quizes = quizesData;
      this.dtTrigger.next();
    });
  }

  ngOnChange(){
    console.log('All quizes', this.quizes);
  }

    /*
      2 
    */
  //selected quiz to pass
  open(quiz: Quiz) {
    this.selectedQuiz = new Quiz(Level.Default, Techno.Default, this.quizQuestions, false, false,0);
    this.selectedQuiz = quiz; 
    this.index=0;
    console.log('selectedQuiz', this.selectedQuiz);
    this.time=this.selectedQuiz.quizQuestions[0].countdown;
    console.log('this');
    console.log(this);
  }
  //for evaluation quiz
  openEval(quiz: Quiz) {
    this.selectedQuizEval = quiz;
  }
  //controle the quiz, if it done or not "pass"
  quizQone(e) {
    if (e === "true") {
      this.selectedQuiz.done = true;
    }
  }
  //controle the quiz, evaluated or not
  quizEvaluation(e) {
    if (e === "true") {
      this.selectedQuizEval.evaluated = true;
    }

  }

}
