import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedServiceProviderComponent } from './managed-service-provider.component';

describe('ManagedServiceProviderComponent', () => {
  let component: ManagedServiceProviderComponent;
  let fixture: ComponentFixture<ManagedServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedServiceProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
