import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service'


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  credentials: any = {};
  id : string = '';
  user: Object = {};

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.userService.getUser(this.id).then(response => {
      this.user = response;
    }).catch(error =>{
      console.log('No se presentaron datos')
    }).finally(() =>{

    })
  }

  login(){
    console.log('Enviar Datos', this.credentials);
  }

}
