import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../models/email';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseURL = "";
  
  constructor(private httpClient: HttpClient) { }

  getAllMails():Observable<Email[]>{
    return this.httpClient.get<Email[]>(`${this.baseURL}/getAllMails`);

  }
  

  addMail(email:Email){
    return this.httpClient.post<Email>(`${this.baseURL}/addEmail`,email);

  }

  getMailBySubject(subject:string){
    

    return this.httpClient.get<Email>(`${this.baseURL}/getBySubject?subject=${subject}`);

  }

  deleteEmail(email:Email){
    
    return this.httpClient.get<Email>(`${this.baseURL}/deleteMail?id=${email.id}`,{ responseType: 'text' as 'json' });
  }

  
  editEmail(email:Email){
    return this.httpClient.post<Email>(`${this.baseURL}/editMail`,email);

  }
}
