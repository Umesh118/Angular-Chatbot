import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../models/signup.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFireDatabase,
    private router:Router
  ) { }

  // signUp(signup:SignUp){
  //   return this.afAuth.auth.createUserWithEmailAndPassword(signup.email, signup.password)
  //   .then((user:any) => {
  //    console.log("Successfully signed up!", user);
  //   }).catch((error:any) => console.log(error));
  // }

  signUp(signup:SignUp){
    return this.afAuth.createUserWithEmailAndPassword(signup.email, signup.password)
    .then(res => {
      console.log('Successfully signed up!', res);
      // this.router.navigate(['login']);
    })
    .catch(err => {
      console.log('Something went wrong', err.message);
    })
  }
}
