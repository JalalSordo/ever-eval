export class Result {
  eveluationId: number;
  quizId: number;
  evaluatorId: number;
  finalScore: number;
  timeElapsed: number;
  remarks: string;
}
export class Email{
  constructor(
    public  subject:string,
    public messageText:string
    ){}
}
