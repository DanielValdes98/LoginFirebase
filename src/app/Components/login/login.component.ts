import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor( private _userService: UserService, private _router: Router ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this._router.navigate(['/Pages/products-list']);
      })
      .catch(error => {
        alert(error);
        console.log("Login error: ", error);
      })
  }

  onClick(provider: string) {
    if (provider === 'google') {
      this._userService.loginWithGoogle()
        .then(response => {
          console.log(response);
          this._router.navigate(['/Pages/products-list']);
        })
        .catch(error => {
          alert(error);
          console.log("Login google error: ", error);
        })
    }

    if (provider === 'github') {
      this._userService.loginWithGithub()
        .then(response => {
          console.log(response);
          this._router.navigate(['/Pages/products-list']);
        })
        .catch(error => {
          alert(error);
          console.log("Login github error: ", error);
        })
    }

    if (provider === 'microsoft') {
      this._userService.loginWithMicrosoft()
        .then(response => {
          console.log(response);
          this._router.navigate(['/Pages/products-list']);
        })
        .catch(error => {
          alert(error);
          console.log("Login microsoft error: ", error);
        })
    }

    // Pending to implement, it has an error
    if (provider === 'facebook') {
      this._userService.loginWithFacebook()
        .then(response => {
          console.log(response);
          this._router.navigate(['/Pages/products-list']);
        })
        .catch(error => {
          alert(error);
          console.log("Login facebook error: ", error);
        })
    }
  }

}
