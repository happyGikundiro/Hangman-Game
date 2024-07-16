import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFailedComponent } from './game-failed.component';

describe('GameFailedComponent', () => {
  let component: GameFailedComponent;
  let fixture: ComponentFixture<GameFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameFailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
