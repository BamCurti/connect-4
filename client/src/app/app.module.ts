import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GameRecordComponent } from './pages/game-record/game-record.component';
import { ChatComponent } from './pages/game/chat/chat.component';
import { GameComponent } from './pages/game/game/game.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    NewGameComponent,
    GameRecordComponent,
    ChatComponent,
    GameComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
