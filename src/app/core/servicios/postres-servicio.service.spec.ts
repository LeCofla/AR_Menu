import { TestBed } from '@angular/core/testing';

import { PostresServicioService } from './postres-servicio.service';

describe('PostresServicioService', () => {
  let service: PostresServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostresServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
