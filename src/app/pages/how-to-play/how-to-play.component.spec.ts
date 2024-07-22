
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HowToPlayComponent } from './how-to-play.component';
import { By } from '@angular/platform-browser';

describe('HowToPlayComponent', () => {
  let component: HowToPlayComponent;
  let fixture: ComponentFixture<HowToPlayComponent>;
  let routerSpy = { navigate: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToPlayComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPlayComponent);
    component = fixture.componentInstance;
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

  it('should display instructions correctly in the template', () => {
    const instructionElements = fixture.debugElement.queryAll(By.css('.instruction'));
    expect(instructionElements.length).toBe(3);

    const instructionTexts = instructionElements.map(el => el.nativeElement.textContent.trim());
    const expectedTexts = component.instructions.map(instruction => 
      `${instruction.instructionNumber} ${instruction.title} ${instruction.description}`
    );

    expectedTexts.forEach((text, index) => {
      expect(instructionTexts[index]).toContain(text);
    });
  });
});
