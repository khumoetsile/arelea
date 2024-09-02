import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcedItSupportComponent } from './outsourced-it-support.component';

describe('OutsourcedItSupportComponent', () => {
  let component: OutsourcedItSupportComponent;
  let fixture: ComponentFixture<OutsourcedItSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsourcedItSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourcedItSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
