import { Injectable } from '@angular/core';
import { Candidate } from '../../candidates/models/Candidate';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../../questions/models/question';
import { Quiz } from '../../quizzes/models/Quiz.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseURL = "/server";

  constructor(private httpClient: HttpClient) { }

  getCandidateWithoutQuiz() {  
    return this.httpClient.get<Candidate[]>(`${this.baseURL}/getCandidatewithoutquiz`);
  }

  getAnswerswithZeroScore() {
    return this.httpClient.get<Answer[]>(`${this.baseURL}/getAnswerNoScore`);
  }
  getQuizBydoneandEvaluated(done: boolean, evaluated: boolean) {
    return this.httpClient.get<Quiz[]>(`${this.baseURL}/getQuizByDoneAndEval?done=${done}&evaluated=${evaluated}`);
    
  }
}
