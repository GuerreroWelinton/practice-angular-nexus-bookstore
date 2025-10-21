import { TestBed } from '@angular/core/testing';

import { BooksApiMock } from './books-api-mock';

describe('BooksApiMock', () => {
  let service: BooksApiMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksApiMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
