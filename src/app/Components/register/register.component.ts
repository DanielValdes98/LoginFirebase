import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private _userService: UserService, private _router: Router) {
    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._userService.register(this.formRegister.value)
      .then(response => {
        console.log(response);
        this._router.navigate(['/login']);
      })
      .catch(error => {
        alert(error);
        console.log(error)
      });
  }

}
