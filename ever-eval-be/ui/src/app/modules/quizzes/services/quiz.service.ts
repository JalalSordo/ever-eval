import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Quiz } from '../models/Quiz.model';
import { Observable, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseURL = "";
  

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(`${this.baseURL}/getAllQuizes`);
  }

  public getQuiz(quiz: Quiz) {   
    const params = new HttpParams().set('level', quiz.level).set('techno', quiz.techno);
    return this.httpClient.get<Quiz>(`${this.baseURL}/addQuiz`, { params });
  }
  public postQuizAnswers(quiz: Quiz) {
    
    return this.httpClient.post<Quiz>(`${this.baseURL}/postQuizAnswers`, quiz, { responseType: 'text' as 'json' });
  }

  public postEvaluatorReview(quiz: Quiz) { 
    return this.httpClient.post<Quiz>(`${this.baseURL}/postEvaluatorReview`, quiz, { responseType: 'text' as 'json' });
  }

  public addScoreToCandidate(quiz: Quiz, score: number) { 
    return this.httpClient.post<Quiz>(`${this.baseURL}/addScoreToCandidate?score=${score}`, quiz, { responseType: 'text' as 'json' });
  }
}
