import { TestBed } from '@angular/core/testing';

import { BebidasServicioService } from './bebidas-servicio.service';

describe('BebidasServicioService', () => {
  let service: BebidasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebidasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
