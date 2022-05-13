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
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: NewGameComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'game/:id', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'record', component: GameRecordComponent, canActivate: [AuthGuard] },
  { path: 'record/:id', component: GameDetailsComponent, canActivate: [AuthGuard] },
  { path: 'user/me', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
