import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../staff/models/staff.model';
import { HomeService } from '../../services/home.service';
import { QuestionService } from 'src/app/modules/questions/services/question.service';
import { CandidateServiceService } from 'src/app/modules/candidates/services/candidate-service.service';
import { QuizQuestion, Type } from 'src/app/modules/questions/models/question';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  staff: Staff = JSON.parse(sessionStorage.getItem('connectedStaff'));
  potentialRecruits: number;
  totalQuestions: number;
  waitingForEvaluation: number;
  avgResult: number;
  recruitedCandidates: number;
  evaluatedQuiz: number;
  totalQuizSent: number;
  answersToEvaluate = 0;
  constructor(private homeService: HomeService, private questionService: QuestionService, private candidateServiceService: CandidateServiceService) { }
  ngOnInit() {
    this.getCandidateQuizNull();
    this.getTotalQuestions();
    this.getTotalQuizsdone();
    this.getTotalQuizsNotDone();
    this.AllCandidateWithQuiz();
    this.getAverageQuizResults();
    this.getAllConvokedCandidates();
  }

  getAverageQuizResults(){
    this.candidateServiceService.getAverageQuizResults().subscribe(data=>{
      var parts = data.split(".");
      this.avgResult = +parts[0];
    });
  }

  getAllConvokedCandidates() {
    this.candidateServiceService.getAllConvokedCandidates().subscribe(data=>{
      this.recruitedCandidates = data.length;
    });
  }

  getCandidateQuizNull() {
    this.homeService.getCandidateWithoutQuiz().subscribe(data => {
      this.potentialRecruits = data.length;

    })
  }
  getTotalQuestions() {
    this.questionService.getAll().subscribe(data => {
      this.totalQuestions = data.length;
    })
  }
  getTotalQuizsdone() {
    this.homeService.getQuizBydoneandEvaluated(true, false).subscribe(quizes => {
      console.log(quizes.length)
      this.waitingForEvaluation = quizes.length;
      if(quizes.length != 0){
        quizes.forEach(quiz => {
          quiz.quizQuestions.forEach(quizQuestion => {
            if(quizQuestion.type == Type.TEXTAREA || quizQuestion.type == Type.TEXTFIELD){
              this.answersToEvaluate++;
            }
          });
        });
      }
    })
  }
  //total quiz not done
  getTotalQuizsNotDone() {
    this.homeService.getQuizBydoneandEvaluated(true, true).subscribe(data => {
      console.log(data)
      this.evaluatedQuiz = data.length;
    })
  }
  AllCandidateWithQuiz() {
    this.candidateServiceService.listCandidates().subscribe(data => {
      let listCand = data;
      listCand.forEach((element, index) => {
        if (element.quiz === null) {
          listCand.splice(index, 1);
        }
      })
      this.totalQuizSent = listCand.length;

    })
  }
}
