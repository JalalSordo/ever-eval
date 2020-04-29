import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../../models/Quiz.model';
import { QuizQuestion, ProposedResponse } from 'src/app/modules/questions/models/question';
import { QuizService } from '../../services/quiz.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Candidate } from 'src/app/modules/candidates/models/Candidate';
import { CandidateServiceService } from 'src/app/modules/candidates/services/candidate-service.service';
@Component({
  selector: 'app-eval-quiz',
  templateUrl: './eval-quiz.component.html',
  styleUrls: ['./eval-quiz.component.css']
})


export class EvalQuizComponent implements OnInit {
	@Input() selectedQuizEval: Quiz;
	@ViewChild('evalSwal', { static: false }) private addSwal: SwalComponent;
	@Output() evaluated: EventEmitter<string> = new EventEmitter<string>();
	pr: ProposedResponse;
	scoreTotalQuiz: number;
	totalQuiz: number;
	totalAnswersScore: number;
	selectedCandidate: Candidate;

	constructor(private quizService: QuizService, private candidateService: CandidateServiceService) { }

	ngOnInit() {
		//
	}

	ngOnChanges(){
		// console.log('selectedQuizEval ngOnChanges', this.selectedQuizEval);
		// console.log(this.selectedQuizEval.id !== undefined);
		if(this.selectedQuizEval.id !== undefined){
			this.candidateService.getCandidateByQuizId(this.selectedQuizEval.id).subscribe(data => {
				if(data !== null){
					this.selectedCandidate = data;
				} else {
					console.log('No data');
				}
			});
		}

	}

	getExactFullLevelName(key: string):string {
		switch (key) {
			case 'CJ':
				return 'Center Junior (CJ)';
			case 'CD':
				return 'Center Developer (CD)';
			case 'CLD':
				return 'Center Leader Developer (CLD)';
			case 'CLD':
				return 'Center Senior Developer (CSD)';
		}
	}

	getScoreColor(score: number):string {
		if(score < 50){
			return 'text-danger';
		} else if(score < 65){
			return 'text-warning';
		} else if(score < 85 ) {
			return 'text-info';
		} else {
			return 'text-success';
		}
	}

	calculateTotalAnswersScore(answers): number {
		this.totalAnswersScore = 0;
		answers.forEach(answer => {
			this.totalAnswersScore += answer.score;
		});
		return this.totalAnswersScore;
	}

	insertScoreOfAnswers() {
		this.scoreTotalQuiz = 0;
		this.totalQuiz=0;
		console.log(this.selectedQuizEval);

		// this.selectedQuizEval.quizQuestions.forEach((element) => {
			
		// 	this.totalQuiz=+this.totalQuiz+ +element.question.score;
			
		// 	console.log('element.question.score', element)
			
		// 	if (element.question.type === 'CHECKBOX' || element.question.type === 'RADIO') {
				
		// 		element.question.proposedResponses.forEach(pr => {
					
		// 			element.answers.forEach(ans => {
		// 				// Check if the candidate has been select the right answer.
		// 				if (pr.content === ans.content && pr.state) {
		// 					ans.score = pr.score;
		// 					console.log(ans.score);
		// 					this.scoreTotalQuiz = +this.scoreTotalQuiz + +ans.score;
		// 				}
						
		// 			});
					
		// 		});
				
		// 	} else {
				
		// 		element.answers.forEach(ans => {
		// 			ans.score = ans.score;
		// 			this.scoreTotalQuiz = +this.scoreTotalQuiz + +ans.score;
		// 		});
				
		// 	}
		// });
		// console.log(this.totalQuiz)
		// console.log("scoreTotalQuiz");
		// console.log(this.scoreTotalQuiz);
		// console.log('selectedQuizEval', this.selectedQuizEval);
		
		// return;
		console.log('accessed !!');
		this.quizService.postEvaluatorReview(this.selectedQuizEval).subscribe(res => {
			
			console.log('postQuizAnswers', res);
			
			//this.scoreTotalQuiz = (this.scoreTotalQuiz / this.totalQuiz) * 100;
			
			// this.scoreTotalQuiz = parseFloat(this.scoreTotalQuiz.toFixed(2));

			// this.quizService.addScoreToCandidate(this.selectedQuizEval, this.scoreTotalQuiz).subscribe(res => {
			// 	res;
			// 	this.evaluated.emit("true");
			// });
			
			// console.log(this.scoreTotalQuiz);

			// this.evaluated.emit("true");

			console.log('Answers resubmited and eveluated');
		});
		
		document.getElementById('eval').click();
		this.addSwal.show();
	}



}


