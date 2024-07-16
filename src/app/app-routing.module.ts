import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { GamePausedComponent } from './components/game-paused/game-paused.component';
import { GameWonComponent } from './components/game-won/game-won.component';
import { GameFailedComponent } from './components/game-failed/game-failed.component';
import { CategorySelectionComponent } from './components/category-selection/category-selection.component';
import { HomeComponent } from './pages/home/home.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'howtoplay', component:HowToPlayComponent},
  { path: 'selectcategory', component: CategorySelectionComponent },
  { path: 'game/:category', component: GamePlayComponent },
  { path: 'paused', component: GamePausedComponent},
  { path: 'win', component: GameWonComponent },
  { path: 'lose', component: GameFailedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
