import { TestBed } from '@angular/core/testing';

import { EntradasServicioService } from './entradas-servicio.service';

describe('EntradasServicioService', () => {
  let service: EntradasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
