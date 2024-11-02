/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PlantService } from './plant.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Service: Plant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlantService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
  });

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
