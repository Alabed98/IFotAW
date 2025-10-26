import { TestBed } from '@angular/core/testing';

import { UpdateFirstViewService } from './update-first-view.service';

describe('UpdateFirstViewService', () => {
  let service: UpdateFirstViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFirstViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
