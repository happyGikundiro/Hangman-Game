import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.css'
})
export class HowToPlayComponent {

  instructions = [
  {
    instructionNumber: '01',
    title:"Choose a category",
    description:"First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
  },
  {
    instructionNumber: '02',
    title:"Guess letters",
    description:"Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
  },
  {
    instructionNumber: '03',
    title:"Win or lose",
    description:"You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
  },
]

constructor(private router: Router){}

gobackToHome():void{
  this.router.navigate(['/'])
}

}
