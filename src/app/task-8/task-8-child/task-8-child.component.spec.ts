import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task8ChildComponent } from './task-8-child.component';

describe('Task8ChildComponent', () => {
  let component: Task8ChildComponent;
  let fixture: ComponentFixture<Task8ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task8ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task8ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
