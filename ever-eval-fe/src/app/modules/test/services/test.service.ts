import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Quiz } from '../../quizzes/models/Quiz.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  test: Quiz;
  url = 'api/quizzes';

  constructor(private httpClient: HttpClient) {}

  getQuizByHash(hash: string) {
    return this.httpClient.get<Quiz>(`${this.url}/?urlHashcode=${hash}`, {});
  }
}
