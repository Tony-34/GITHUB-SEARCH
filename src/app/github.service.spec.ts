
import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
























// import { GithubService } from './github.service';

// describe('GithubService', () => {
//   it('should create an instance', () => {
//     expect(new GithubService()).toBeTruthy();
//   });
// });
