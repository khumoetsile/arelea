import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallManagementComponent } from './firewall-management.component';

describe('FirewallManagementComponent', () => {
  let component: FirewallManagementComponent;
  let fixture: ComponentFixture<FirewallManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirewallManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirewallManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
