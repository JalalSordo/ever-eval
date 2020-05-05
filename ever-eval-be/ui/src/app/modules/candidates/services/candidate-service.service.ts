import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../models/Candidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  url = 'http://localhost:8080';
  baseURL = ""; 
  constructor(private http: HttpClient) { }

  listCandidates() {
    return this.http.get<Candidate[]>(`${this.baseURL}/findAllC`);
    
  }

  addCandidate(candidate: Candidate) {
    return this.http.post<Candidate>(`${this.baseURL}/addCandidate`, candidate);
  }
  public updateCandidate(candidate: Candidate) {  
    return this.http.post<Candidate>(`${this.baseURL}/updateCandidate`, candidate);
  }
  deleteCandidate(candidate: Candidate) {
    
    return this.http.get<Candidate>(`${this.baseURL}/deleteCandidateById?id=${candidate.id}`, { responseType: 'text' as 'json' });

  }
  public getCandidatebyMail(candidate: Candidate) {
    return this.http.get<Candidate>(`${this.baseURL}/getCandidateByMail?mail=${candidate.mail}`);
  }

  addQuizToC(candidate: Candidate) {  
    return this.http.post<string>(`${this.baseURL}/addQuizToC`, candidate, { responseType: 'text' as 'json' });
  }
  
  getCandidateByQuizId(id: number): Observable<Candidate>{
    return this.http.get<Candidate>(`${this.baseURL}/getCandidateByQuizId/${id}`);
  }

  getAverageQuizResults() {
    return this.http.get<string>(this.url + '/getAverageQuizResults', { responseType: 'text' as 'json' });
  }

  getAllConvokedCandidates() {
    return this.http.get<Candidate[]>(this.url + '/getAllConvokedCandidates');
  }

}

