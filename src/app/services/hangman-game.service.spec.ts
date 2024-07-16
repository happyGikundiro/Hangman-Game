import { TestBed } from '@angular/core/testing';

import { HangmanGameService } from './hangman-game.service';

describe('HangmanGameService', () => {
  let service: HangmanGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangmanGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
