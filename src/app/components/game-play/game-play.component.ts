import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HangmanGameService } from '../../services/hangman-game.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.css'
})
export class GamePlayComponent implements OnInit{

  selectedCategory!: string 
  wordToGuess: string = '';
  displayedWord: string = '';
  guesses: string[] = [];
  maxGuesses: number = 6;
  remainingGuesses!: number ;

  constructor(private route: ActivatedRoute, private hangmanService: HangmanGameService){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const category = params.get('category');
      this.selectedCategory = category ? category : '';
    })
  }

  guess(letter: string): void {
    this.guesses.push(letter);
    if (this.wordToGuess.includes(letter)) {
      this.updateDisplayedWord(letter);
    } else {
      this.remainingGuesses--;
    }
  }

  updateDisplayedWord(letter: string): void {
    let newDisplayedWord = '';
    for (let i = 0; i < this.wordToGuess.length; i++) {
      if (this.wordToGuess[i] === letter || this.guesses.includes(this.wordToGuess[i])) {
        newDisplayedWord += this.wordToGuess[i] + ' ';
      } else {
        newDisplayedWord += '_ ';
      }
    }
    this.displayedWord = newDisplayedWord;
  }

  // startNewGame(): void {
  //   const categoryWords = this.categoryService.getCategories()[this.selectedCategory];
  //   const randomIndex = Math.floor(Math.random() * categoryWords.length);
  //   this.wordToGuess = categoryWords[randomIndex].name.toUpperCase();
  //   this.displayedWord = '_ '.repeat(this.wordToGuess.length);
  //   this.remainingGuesses = this.maxGuesses;
  //   this.guesses = [];
  // }
}
