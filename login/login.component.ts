import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, NgZone } from '@angular/core';

import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
              private router: Router,
    // private afAuth: AngularFireAuth,
              private ngZone: NgZone) { }

  username: string;
  password: string;
  access: number;


  lengthEmpleados: number;

  errorMessage = '';

  @Output() usuarioSeleccionado = new EventEmitter();
  @Output() loginP: EventEmitter<number> = new EventEmitter<number>();


  // tslint:disable-next-line: typedef
  changeComponentLogin(login: number) {
    // this.usuarioSeleccionado.emit(login);
    this.loginP.emit(login);
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    //     this.afAuth.user.subscribe(user => {
    //       if (user) {
    //         this.ngZone.run(() => {
    //           this.router.navigate(['/todos']);
    //         });

    //   }
    // });
  }

  // tslint:disable-next-line: typedef
  loginInit() {
    const user = this.username;
    const pass = this.password;
  }

  // tslint:disable-next-line: typedef
  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }

  // tslint:disable-next-line: typedef
  findUser() {
   

  }

  // tslint:disable-next-line: typedef
  signIn() {
    // this.afAuth.auth.signInWithEmailAndPassword(this.username, this.password).then(() => {
    this.router.navigate(['/cover']);
    //  }).catch(response => {
    //    this.errorMessage = response.message;
    //  });
    // }

  }

}
