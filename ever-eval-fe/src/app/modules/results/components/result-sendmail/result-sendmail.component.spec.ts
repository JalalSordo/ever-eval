import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSendmailComponent } from './result-sendmail.component';

describe('ResultSendmailComponent', () => {
  let component: ResultSendmailComponent;
  let fixture: ComponentFixture<ResultSendmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSendmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSendmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
