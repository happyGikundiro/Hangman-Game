
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HowToPlayComponent } from './how-to-play.component';

describe('HowToPlayComponent', () => {
  let component: HowToPlayComponent;
  let fixture: ComponentFixture<HowToPlayComponent>;
  let routerSpy = { navigate: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToPlayComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToPlayComponent);
    component = fixture.componentInstance;
    component.instructions = [
      { instructionNumber: '1', title: 'Title1', description: 'Description1' },
      { instructionNumber: '2', title: 'Title2', description: 'Description2' },
      { instructionNumber: '3', title: 'Title3', description: 'Description3' }
    ];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have three instructions', () => {
    expect(component.instructions.length).toBe(3);
  });

  it('should navigate to home when gobackToHome is called', () => {
    component.gobackToHome();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

});
