import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerSpy = { navigate: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers:[{provide:Router, useValue:routerSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /selectcategory when playGame is called', () => {
    component.playGame();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/selectcategory']);
  });

  it('should navigate to /howtoplay when getInstructions is called', () => {
    component.getInstructions();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/howtoplay']);
  });

});
