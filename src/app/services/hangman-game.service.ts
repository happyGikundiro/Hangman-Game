import { Injectable } from '@angular/core';
import { Category } from '../model/model';
import { CATEGORIES } from '../db-data';

@Injectable({
  providedIn: 'root'
})
export class HangmanGameService {

  categories : Category[] = CATEGORIES;

  constructor() { }

  getCategories(): Category[]{
    return this.categories
  }
}
