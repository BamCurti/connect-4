import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { GameRecordComponent } from './pages/game-record/game-record.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GameComponent } from './pages/game/game.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: NewGameComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'game', component: GameComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: 'record/:id', component: GameRecordComponent },
  { path: 'user/me', component: UserDetailsComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
