import { Component, OnInit } from '@angular/core';
import { HangmanGameService } from '../../services/hangman-game.service';
import { Category } from '../../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrl: './category-selection.component.css'
})
export class CategorySelectionComponent implements OnInit{

  categories!: Category[]

  constructor(private hangmangameService: HangmanGameService,private router: Router){}

  gobackToHome():void{
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.categories = this.hangmangameService.getCategories()
  }

  selectCategory(category: string):void{
    this.router.navigate(['/game', category])
  }
}
