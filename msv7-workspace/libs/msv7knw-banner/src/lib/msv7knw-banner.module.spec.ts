import { async, TestBed } from '@angular/core/testing';
import { Msv7knwBannerModule } from './msv7knw-banner.module';

describe('Msv7knwBannerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Msv7knwBannerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Msv7knwBannerModule).toBeDefined();
  });
});
