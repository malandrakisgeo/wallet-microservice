import { TestBed, inject } from '@angular/core/testing';

import { PlayercreationService } from './playercreation.service';

describe('PlayercreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayercreationService]
    });
  });

  it('should be created', inject([PlayercreationService], (service: PlayercreationService) => {
    expect(service).toBeTruthy();
  }));
});
