import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalQuizComponent } from './eval-quiz.component';

describe('EvalQuizComponent', () => {
  let component: EvalQuizComponent;
  let fixture: ComponentFixture<EvalQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
