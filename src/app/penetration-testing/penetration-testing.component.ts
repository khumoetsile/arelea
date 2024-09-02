import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-penetration-testing',
  standalone: true,
  imports: [],
  templateUrl: './penetration-testing.component.html',
  styleUrl: './penetration-testing.component.css'
})
export class PenetrationTestingComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
