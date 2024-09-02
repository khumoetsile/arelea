import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenetrationTestingComponent } from './penetration-testing.component';

describe('PenetrationTestingComponent', () => {
  let component: PenetrationTestingComponent;
  let fixture: ComponentFixture<PenetrationTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenetrationTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenetrationTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
