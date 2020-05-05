import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EmailComponent } from './components/email/email.component';
import { AddEmailComponent } from './components/add-email/add-email.component';
import { EditEmailComponent } from './components/edit-email/edit-email.component';


@NgModule({
  declarations: [EmailComponent, AddEmailComponent, EditEmailComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    SweetAlert2Module.forRoot()
    
  ]
})
export class EmailModule { }
