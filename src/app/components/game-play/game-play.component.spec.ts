import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { GamePlayComponent } from './game-play.component';
import { of } from 'rxjs';

describe('GamePlayComponent', () => {
  let component: GamePlayComponent;
  let fixture: ComponentFixture<GamePlayComponent>;
  let routerSpy = { navigate: jest.fn() };
  let activatedRouteSpy = {
    paramMap: of({
      get: (param: string) => 'Movies'
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamePlayComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the correct category and start a new game', () => {
    expect(component.selectedCategory).toBe('Movies');
    expect(component.wordToGuess).not.toBe('');
    expect(component.displayedWord).not.toBe('');
    expect(component.remainingGuesses).toBe(component.maxGuesses);
  });

  it('should navigate to home when quit is called', () => {
    component.quit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should navigate to category selection when newCategory is called', () => {
    component.newCategory();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/selectcategory']);
  });

  it('should decrease remaining guesses and update progress bar when an incorrect letter is guessed', () => {
    const initialDisplayedWord = component.displayedWord;
    const incorrectLetter = 'Z';
    component.guess(incorrectLetter);
    expect(component.displayedWord).toBe(initialDisplayedWord);
    expect(component.remainingGuesses).toBe(component.maxGuesses - 1);
  });

  it('should declare the game lost when remaining guesses reach zero', () => {
    component.remainingGuesses = 1;
    component.guess('Z');
    expect(component.gameOver).toBe(true);
    expect(component.gameStatus).toBe('You Lose');
  });

  it('should declare the game won when the word is fully guessed', () => {
    component.wordToGuess = 'TEST';
    component.displayedWord = 'TES ';
    component.guess('T');
    expect(component.gameOver).toBe(true);
    expect(component.gameStatus).toBe('You Win');
  });

  it('should reset the game state when playAgain is called', () => {
    component.playAgain();
    expect(component.gameOver).toBe(false);
    expect(component.gameStatus).toBe('Playing');
    expect(component.remainingGuesses).toBe(component.maxGuesses);
  });

  it('should pause the game when pauseGame is called', () => {
    component.pauseGame();
    expect(component.gameStatus).toBe('Paused');
    expect(component.gameOver).toBe(false);
  });
});
