import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAwarenessTrainingComponent } from './user-awareness-training.component';

describe('UserAwarenessTrainingComponent', () => {
  let component: UserAwarenessTrainingComponent;
  let fixture: ComponentFixture<UserAwarenessTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAwarenessTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAwarenessTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
