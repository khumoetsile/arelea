import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-awareness-training',
  standalone: true,
  imports: [],
  templateUrl: './user-awareness-training.component.html',
  styleUrl: './user-awareness-training.component.css'
})
export class UserAwarenessTrainingComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
