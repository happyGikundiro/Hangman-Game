import { TestBed } from '@angular/core/testing';

import { HangmanGameService } from './hangman-game.service';
import { CATEGORIES } from '../db-data';
import { Category } from '../model/model';

describe('HangmanGameService', () => {
  let service: HangmanGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangmanGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return categories', () => {
    const categories: Category[] = service.getCategories();
    expect(categories).toBe(CATEGORIES);
  });
});
