import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizService } from './services/quiz.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { PassQuizComponent, FormatTimePipe } from './components/pass-quiz/pass-quiz.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EvalQuizComponent } from './components/eval-quiz/eval-quiz.component';
import { CountdownModule, CountdownGlobalConfig } from 'ngx-countdown';
import { CandidateQuizComponent } from './components/candidate-quiz/candidate-quiz.component';

@NgModule({
  declarations: [QuizzesComponent, PassQuizComponent, EvalQuizComponent, FormatTimePipe, CandidateQuizComponent],
  imports: [
    QuizzesRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    SweetAlert2Module.forRoot(),
    CountdownModule],
  providers: [QuizService, { provide: CountdownGlobalConfig }]
})
export class QuizzesModule { }
