import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  constructor(
    private viewportScroller: ViewportScroller,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  onSubmit(): void {
    this.isLoading = true;  // Show the spinner

    this.contactService.sendEmail(this.formData).subscribe(
      response => {
        console.log('Email sent successfully!', response);
        alert('Your message has been sent!');
        this.isLoading = false;  // Hide the spinner
      },
      error => {
        console.error('There was an error sending the email!', error);
        alert('Failed to send the message.');
        this.isLoading = false;  // Hide the spinner
      }
    );
  }
}
