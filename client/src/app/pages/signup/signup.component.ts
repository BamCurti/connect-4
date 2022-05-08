import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';
import { AuthService} from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [''],
      password: [''],
      confirm: ['']
    })
  }

  signUp(){
    /*this.http.post<any>("http://localhost:3000/api/user", this.signupForm.value)
    .subscribe(res=> {
      alert("Sign Up Success");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=> {
      alert("Something went wrong");
    })*/
    const form = this.signupForm.getRawValue();
    const body = {
      email: form['email'],
      password: form['password'],
    }

    console.log(body);

    this.authService.createUser(body)
    .then(response => {
      alert("Sign Up Success");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }).catch(err => {
      console.log(err);
      alert("Something went wrong");
    })
  }
}
