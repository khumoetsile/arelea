import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-network-security-and-optimization',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './network-security-and-optimization.component.html',
  styleUrl: './network-security-and-optimization.component.css'
})
export class NetworkSecurityAndOptimizationComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
