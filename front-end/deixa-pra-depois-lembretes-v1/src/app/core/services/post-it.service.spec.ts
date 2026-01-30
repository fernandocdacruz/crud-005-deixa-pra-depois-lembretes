import { TestBed } from '@angular/core/testing';

import { PostItService } from './post-it.service';

describe('PostItService', () => {
  let service: PostItService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostItService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
