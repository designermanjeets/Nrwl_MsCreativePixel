import { async, TestBed } from '@angular/core/testing';
import { Msv4knwNavModule } from './msv4knw-nav.module';

describe('Msv4knwNavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Msv4knwNavModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Msv4knwNavModule).toBeDefined();
  });
});
