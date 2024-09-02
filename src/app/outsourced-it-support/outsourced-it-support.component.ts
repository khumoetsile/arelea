import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-outsourced-it-support',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './outsourced-it-support.component.html',
  styleUrl: './outsourced-it-support.component.css'
})
export class OutsourcedItSupportComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
