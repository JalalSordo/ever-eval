import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStaffComponent } from './delete-staff.component';

describe('DeleteStaffComponent', () => {
  let component: DeleteStaffComponent;
  let fixture: ComponentFixture<DeleteStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
