import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';

import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { DeleteStaffComponent } from './components/delete-staff/delete-staff.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { StaffComponent } from './components/staff/staff.component';
import { StaffService } from './services/staff.service';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
  declarations: [StaffComponent, AddStaffComponent, DeleteStaffComponent, EditStaffComponent],
  imports: [
    CommonModule,
    BrowserModule,
    StaffRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [StaffService],
  entryComponents: []
})
export class StaffModule { }
