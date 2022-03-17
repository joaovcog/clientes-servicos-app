import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  sucesso: boolean = false;
  errors: string[] = [];

  constructor(private clienteService: ClientesService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.clienteService.salvar(this.cliente).subscribe({
      next: (response) => {
        this.cliente = response;
      },
      complete: () => {
        this.sucesso = true;
        this.errors = [];
      },
      error: (errorResponse) => {
        this.sucesso = false;
        this.errors = errorResponse.error.errors;
      }
    });
  }

  voltarParaListagem(): void {
    this.router.navigate(['/clientes-lista']);
  }

}
