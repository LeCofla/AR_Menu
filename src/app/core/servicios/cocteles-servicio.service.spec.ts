import { TestBed } from '@angular/core/testing';

import { CoctelesServicioService } from './cocteles-servicio.service';

describe('CoctelesServicioService', () => {
  let service: CoctelesServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctelesServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
