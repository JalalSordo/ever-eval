import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './components/results/results.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ResultSendmailComponent } from './components/result-sendmail/result-sendmail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResultsComponent,
    ResultSendmailComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot()
   ]
})
export class ResultsModule { }
