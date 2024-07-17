
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HangmanGameService } from '../../services/hangman-game.service';
import { CATEGORIES } from '../../db-data';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.css'
})
export class GamePlayComponent implements OnInit {

  selectedCategory!: string;
  wordToGuess: string = '';
  displayedWord: string = '';
  guesses: string[] = [];
  maxGuesses: number = 6;
  remainingGuesses!: number;
  progressBarWidth: number = 100;

  gameOver: boolean = false;
  gameStatus: string = 'Playing';

  constructor(private route: ActivatedRoute, private hangmanService: HangmanGameService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      this.selectedCategory = category ? category : '';

      this.startNewGame();

      this.gameOver = false;
      this.gameStatus = 'Playing';
    });
  }

  startNewGame(): void {
    const categoryWords = CATEGORIES.find(word => word.category === this.selectedCategory)?.items;
    if (categoryWords) {
      const randomIndex = Math.floor(Math.random() * categoryWords.length);
      this.wordToGuess = categoryWords[randomIndex].name.toUpperCase();
      this.displayedWord = ' '.repeat(this.wordToGuess.length);
      console.log('nn',this.wordToGuess)
      this.remainingGuesses = this.maxGuesses;
      this.guesses = [];
      this.updateProgressBar(); 
    }
  }

  guess(letter: string): void {
    if (this.guesses.includes(letter) || this.remainingGuesses === 0) return;

    this.guesses.push(letter);
    if (this.wordToGuess.includes(letter)) {
      this.updateDisplayedWord(letter);
    } else {
      this.remainingGuesses--;
    }

    this.updateProgressBar();

    if (this.remainingGuesses === 0) {
      this.gameOver = true;
      this.gameStatus = 'You Lose';
    }

    
    if (!this.displayedWord.includes('  ')) {
      this.gameOver = true;
      this.gameStatus = 'You Win';
    }
  }

  updateDisplayedWord(letter: string): void {
    let newDisplayedWord = '';
    for (let i = 0; i < this.wordToGuess.length; i++) {
      if (this.wordToGuess[i] === letter || this.guesses.includes(this.wordToGuess[i])) {
        newDisplayedWord += this.wordToGuess[i] + ' ';
      } else {
        newDisplayedWord += ' ';
      }
    }
    this.displayedWord = newDisplayedWord;
  }

  updateProgressBar(): void {
    this.progressBarWidth = (this.remainingGuesses / this.maxGuesses) * 100;
  }

  playAgain(): void {
    this.startNewGame();
    this.gameOver = false;
    this.gameStatus = 'Playing';
  }

  newCategory(): void {
    this.router.navigate(['/selectcategory']);
  }

  quit(): void {
    this.router.navigate(['/']);
  }

  pauseGame(): void {
    this.gameStatus = 'Paused';
    this.gameOver = false;
  }
}
