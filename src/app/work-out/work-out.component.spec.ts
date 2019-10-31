import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOutComponent } from './work-out.component';

describe('WorkOutComponent', () => {
  let component: WorkOutComponent;
  let fixture: ComponentFixture<WorkOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
