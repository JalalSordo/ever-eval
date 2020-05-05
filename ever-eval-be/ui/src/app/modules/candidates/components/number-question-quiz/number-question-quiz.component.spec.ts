import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberQuestionQuizComponent } from './number-question-quiz.component';

describe('NumberQuestionQuizComponent', () => {
  let component: NumberQuestionQuizComponent;
  let fixture: ComponentFixture<NumberQuestionQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberQuestionQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberQuestionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
