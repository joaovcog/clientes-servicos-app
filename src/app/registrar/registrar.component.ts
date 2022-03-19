import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  hasError: boolean | undefined;
  mensagemSucesso: string | undefined;
  usuarioCriado: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.salvar(this.usuario).subscribe({
      complete: () => {
        this.hasError = false;
        this.mensagemSucesso = 'Conta criada com sucesso!';
        this.usuarioCriado = true;
      },
      error: (errorResponse) => {
        this.hasError = true;
        this.mensagemSucesso = undefined;
      }
    });
  }

}
