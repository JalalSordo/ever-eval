import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { DeleteStaffComponent } from './components/delete-staff/delete-staff.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';

const routes: Routes = [
  { path: 'addstaff', component: AddStaffComponent },
  { path: 'editstaff', component: EditStaffComponent },
  { path: 'deletestaff', component: DeleteStaffComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {}
