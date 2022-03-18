import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string | undefined;
  password: string | undefined;
  loginError: boolean | undefined;
  cadastrando: boolean | undefined;

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/home']);
    console.log(this.username, this.password);
  }

}
