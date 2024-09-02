/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScrollServiceService } from './scroll-service.service';

describe('Service: ScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollServiceService]
    });
  });

  it('should ...', inject([ScrollServiceService], (service: ScrollServiceService) => {
    expect(service).toBeTruthy();
  }));
});
