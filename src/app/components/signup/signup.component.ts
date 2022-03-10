import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/models/signup.model';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router:Router,
    private signupService: SignupService
  ) { }

  ngOnInit(): void {
  }

  signup(name:any, email:any, password:any, verifyPassword:any){
    const signUp= new SignUp(name.value, password.value, email.value, verifyPassword.value);
    this.signupService.signUp(signUp)
    .then(resolve => this.router.navigate(['chat']))
    .catch(error => console.log(error));
  }

}
