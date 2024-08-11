import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedSecurityServiceProviderComponent } from './managed-security-service-provider.component';

describe('ManagedSecurityServiceProviderComponent', () => {
  let component: ManagedSecurityServiceProviderComponent;
  let fixture: ComponentFixture<ManagedSecurityServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedSecurityServiceProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedSecurityServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
