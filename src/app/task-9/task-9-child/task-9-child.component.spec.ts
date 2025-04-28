import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task9ChildComponent } from './task-9-child.component';

describe('Task9ChildComponent', () => {
  let component: Task9ChildComponent;
  let fixture: ComponentFixture<Task9ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task9ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task9ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
