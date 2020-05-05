import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionService } from './services/question.service';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { DataTablesModule } from 'angular-datatables';
import { DeleteQuestionComponent } from './components/delete-question/delete-question.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [QuestionsComponent,
    AddQuestionComponent,
    EditQuestionComponent, DeleteQuestionComponent],
  imports: [CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuestionsRoutingModule,
    NgxPaginationModule,
    DataTablesModule,
    SweetAlert2Module.forRoot()],
  providers: [QuestionService, HttpClientModule]
})
export class QuestionsModule { }
