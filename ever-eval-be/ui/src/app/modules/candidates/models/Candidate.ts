import { Level, Techno } from '../../questions/models/question';
import { Quiz } from '../../quizzes/models/Quiz.model';

export class Candidate {
  id: number;

  constructor( public name: string,public mail: string,public level: Level,public techno: Techno, public score: number,public convoked: boolean,public quiz?: Quiz) { }
}
