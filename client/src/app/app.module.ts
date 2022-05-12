import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login'


//Created components
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GameRecordComponent } from './pages/game-record/game-record.component';
import { ChatComponent } from './pages/chat/chat.component';
import { GameComponent } from './pages/game/game.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component'

//material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BoardComponent } from './component/board/board.component';
import { PieceComponent } from './component/piece/piece.component';

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
    UserDetailsComponent,
    GameDetailsComponent,
    NotFoundComponent,
    BoardComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SocialLoginModule,
    //material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.googleId
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
