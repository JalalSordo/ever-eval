import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Candidate } from '../../candidates/models/Candidate';
import { Observable } from 'rxjs';
import { Email } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  baseURL = "";
  url = 'results'; 
  constructor(private httpClient: HttpClient) { }
  //get all candidate with quiz evaluated
  getAllResults(): Observable<Candidate[]> {  
    return this.httpClient.get<Candidate[]>(`${this.baseURL}/getAllCandidateWithEvaluatedQuiz`);
  }
  
  //send email for candidate selected 
  sendMail(candidate: Candidate, email:Email) {
    console.log(sessionStorage.getItem('mail'))
    //const params = new HttpParams().set('subject',email.subject).set('text',email.messageText).set('to',candidate.mail);
    //return this.httpClient.post<Candidate>("http://localhost:8080/sendEmail",{params},{responseType: 'text' as 'json' });
   return this.httpClient.post<Candidate>(`${this.baseURL}/sendEmail?subject=${email.subject}&text=${email.messageText}&to=${candidate.mail}`,{responseType: 'text' as 'json' });
  }
  //get All mails content
  getAllMailsContent(){
    return this.httpClient.get<Email[]>(`${this.baseURL}/getAllMails`);
  }

}