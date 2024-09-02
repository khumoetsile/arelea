import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-firewall-management',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './firewall-management.component.html',
  styleUrl: './firewall-management.component.css'
})
export class FirewallManagementComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
