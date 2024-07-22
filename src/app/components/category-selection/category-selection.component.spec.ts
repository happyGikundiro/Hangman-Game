import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CategorySelectionComponent } from './category-selection.component';

describe('CategorySelectionComponent', () => {
  let component: CategorySelectionComponent;
  let fixture: ComponentFixture<CategorySelectionComponent>;
  let routerSpy = { navigate: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySelectionComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when gobackToHome is called', () => {
    component.gobackToHome();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should navigate to game route with selected category when selectCategory is called', () => {
    const category = 'Animals';
    component.selectCategory(category);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/game', category]);
  });

});
