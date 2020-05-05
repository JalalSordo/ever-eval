import { Injectable } from '@angular/core';
import { Staff } from '../models/staff.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseURL = "";
  // `${this.baseURL}/editStaff`

  constructor(private httpClient: HttpClient) { }
  public createStaff(staff: Staff) {

    return this.httpClient.post<Staff>(`${this.baseURL}/addStaff`, staff, { responseType: 'text' as 'json' });
  }
  public finAll(): Observable<Staff[]> {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user' + ':' + 'c06a32fd-eb55-4a33-b723-4518e788c705') });
    return this.httpClient.get<Staff[]>(`${this.baseURL}/findAllStaff`);
  }
  public deleteStaff(staff: Staff) {
    console.log(staff);
    return this.httpClient.get<Staff>(`${this.baseURL}/deleteStaffById?id=${staff.id}`, { responseType: 'text' as 'json' });
  }
  public editStaff(staff: Staff) {
    return this.httpClient.post<Staff>(`${this.baseURL}/editStaff`, staff, { responseType: 'text' as 'json' });
  }
  public getStaffbymail(staff: Staff) {
    //const params = new HttpParams().set('mail', mail); `${this.baseURL}/getStaffByMail?mail=${mail}`
    //console.log('mail ', mail);
    return this.httpClient.get<Staff>(`${this.baseURL}/getStaffByMail?mail=${staff.mail}`);
  }

  public getStaffbyMailString(mail: string): Observable<Staff> {
    return this.httpClient.get<Staff>(`${this.baseURL}/getStaffByMail?mail=${mail}`);
  }

}
