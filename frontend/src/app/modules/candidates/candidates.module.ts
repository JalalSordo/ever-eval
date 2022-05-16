import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { CandidateServiceService } from './services/candidate-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NumberQuestionQuizComponent } from './components/number-question-quiz/number-question-quiz.component';

@NgModule({
  declarations: [CandidatesComponent, AddCandidateComponent, EditCandidateComponent, NumberQuestionQuizComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [CandidateServiceService]
})
export class CandidatesModule { }
