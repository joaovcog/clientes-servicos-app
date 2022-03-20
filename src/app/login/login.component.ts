import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string | undefined;
  password: string | undefined;
  loginInvalido: boolean | undefined;

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    if (this.username && this.password) {
      this.authService.logar(this.username, this.password).subscribe({
        next: (response) => {
          const access_token = JSON.stringify(response);
          localStorage.setItem('access_token', access_token);
          console.log(response);
        },
        complete: () => {
          this.router.navigate(['/home']);
        },
        error: (errorResponse) => {
          this.loginInvalido = true;
        }
      });
    } else {
      this.loginInvalido = true;
    }
  }

}
