import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFireDatabase,
    private router:Router
  ) { }

  // login(login:Login){
  //   return this.afAuth.auth.signInWithEmailAndPassword(login.userName, login.password)
  //   .then((user:any) => {
  //     localStorage.setItem('user', user.toString());
  //     this.router.navigate(['chat']);
  //   })
  // }

  login(login:Login){
    return this.afAuth.signInWithEmailAndPassword(login.userName, login.password)
    .then(user => {
      localStorage.setItem('user', user.toString());
      this.router.navigate(['/chat']);
    })
    .catch(err => {
      console.log('Something went wrong', err.message);
    })
  }
}
