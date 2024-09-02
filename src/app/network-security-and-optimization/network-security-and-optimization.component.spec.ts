import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSecurityAndOptimizationComponent } from './network-security-and-optimization.component';

describe('NetworkSecurityAndOptimizationComponent', () => {
  let component: NetworkSecurityAndOptimizationComponent;
  let fixture: ComponentFixture<NetworkSecurityAndOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkSecurityAndOptimizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkSecurityAndOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
