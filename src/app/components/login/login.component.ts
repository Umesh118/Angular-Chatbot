import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
  }

  logIn(username:any, password:any){
    const loginInfo = new Login(username.value, password.value);
    this.loginService.login(loginInfo).then(resolve => this.router.navigate(['chat']))
    .catch(error => console.log(error));
  }
}
