import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-managed-service-provider',
  standalone: true,
  imports: [],
  templateUrl: './managed-service-provider.component.html',
  styleUrl: './managed-service-provider.component.css'
})
export class ManagedServiceProviderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
