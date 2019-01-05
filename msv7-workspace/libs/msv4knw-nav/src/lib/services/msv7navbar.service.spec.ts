import { TestBed } from '@angular/core/testing';

import { Msv7navbarService } from './msv7navbar.service';

describe('Msv7navbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Msv7navbarService = TestBed.get(Msv7navbarService);
    expect(service).toBeTruthy();
  });
});
