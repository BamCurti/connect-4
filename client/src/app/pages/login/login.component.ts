import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder} from "@angular/forms";
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { SocialAuthService,GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: any = {};
  public loginForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService, 
    private authService: AuthService, 
    private router: Router,
    private SocialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
    this.SocialAuthService.authState.subscribe((user: any) => {
      console.log('Google login', user);
      //Enviar el token de Google al API
      if(user) {
        this.loginService.googleLogin(user.idToken).subscribe(response => {
          this.authService.save(response.token);
          this.router.navigate(['/users']);
        })
      }
    })
  }

  login() {
    this.credentials = this.loginForm.getRawValue();
    console.log('Enviar datos', this.credentials);
    this.loginService.login(this.credentials).then(response => {
      this.authService.save(response.token);
      this.router.navigate(['']);
    }).catch(e => {
      alert("Something went wrong");
      console.log('Datos incorrectos');
    });
  }

  googleLogin(e: any){
    this.SocialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    e.preventDefault();
  }
}
