import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // No need for 'imports' here
})
export class ContactService {

  private emailEndpoint = 'http://dev.arelea.co.bw/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    return this.http.post(this.emailEndpoint, formData);
  }
}
