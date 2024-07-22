import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectionComponent } from './components/category-selection/category-selection.component';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { HomeComponent } from './pages/home/home.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectionComponent,
    GamePlayComponent,
    HomeComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
