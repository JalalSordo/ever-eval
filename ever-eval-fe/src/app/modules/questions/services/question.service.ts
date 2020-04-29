import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, Level, Techno } from '../models/question';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url:string="http://localhost:8080";
  baseURL = "/server";

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Question[]> {   
    return this.httpClient.get<Question[]>(`${this.baseURL}/getAllQUESTION`);
  }
  add(question: Question) {   
    return this.httpClient.post<Question>(`${this.baseURL}/addQuestion`, question, { responseType: 'text' as 'json' });
  }
  public delete(question: Question) { 
    return this.httpClient.get<Question>(`${this.baseURL}/deleteQuestionById?id=${question.id}`, { responseType: 'text' as 'json' });
  }
  public edit(question: Question) {   
    console.log(question);
    return this.httpClient.post<Question>(`${this.baseURL}/editQuestion`, question, { responseType: 'text' as 'json' });
  }
  public findbycontent(content: string) {       
    const params = new HttpParams().set('content', content);
    return this.httpClient.get<Question>(`${this.baseURL}/findbycontent`, { params });
  }
  public findbylevelandtechno(level: Level, techno: Techno): Observable<Question[]> {  
    const params = new HttpParams().set('level', level).set('techno', techno);
    return this.httpClient.get<Question[]>(`${this.baseURL}/findQbylevel&tech`, { params });
  }

}
