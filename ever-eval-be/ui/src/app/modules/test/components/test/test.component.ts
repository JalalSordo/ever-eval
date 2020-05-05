import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TestService } from '../../services/test.service';
import { Quiz } from 'src/app/modules/quizzes/models/Quiz.model';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TestService
  ) {}
  //secondsCounter = interval(1000).pipe(map(x => this.quiz.maxTimeNeeded - x));
  quiz: Quiz;

  getTest() {
    this.route.paramMap.pipe(map(params => params.get('hash'))).subscribe(hash => {
      this.service.getQuizByHash(hash).subscribe(
        quiz => (this.quiz = quiz[0]),
        err => console.error(err),
        () => {
          if (this.quiz) {
            console.log(this.quiz);
          } else {
            this.router.navigate(['/testnotfound']);
          }
        }
      );
    });
  }

  ngOnInit() {
    this.getTest();
  }
}
