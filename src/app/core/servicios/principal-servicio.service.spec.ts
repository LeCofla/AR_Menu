import { TestBed } from '@angular/core/testing';

import { PrincipalServicioService } from './principal-servicio.service';

describe('PrincipalServicioService', () => {
  let service: PrincipalServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
