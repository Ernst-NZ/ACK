import { TestBed } from '@angular/core/testing';

import { LidmaatService } from './lidmaat.service';

describe('LidmaatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LidmaatService = TestBed.get(LidmaatService);
    expect(service).toBeTruthy();
  });
});
