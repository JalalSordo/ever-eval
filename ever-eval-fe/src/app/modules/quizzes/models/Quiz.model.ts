import { Level, QuizQuestion, Techno, Question } from '../../questions/models/question';

export class Quiz {
  /* quizId: number;
   candidateId: number;
   hrId: number;
   maxTimeNeeded: number;
   generationTimestamp: number;
   expirationTimestamp: number;
   urlHashcode: string;
   isDone: boolean;
   isEvaluated: boolean;*/
   id: number;
  constructor(
    public level: Level,
    public techno: Techno,
    public quizQuestions: Array<QuizQuestion>,
    public done: boolean,
    public evaluated: boolean,
    public totalQuestion:number
  ) { }
}
