import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: number | undefined;
  mensagemSucesso: string = '';

  constructor(private clienteService: ClientesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.id = +id;
      this.clienteService.getClienteById(this.id).subscribe({
        next: (response) => {
          this.cliente = response
        },
        error: (errorResponse) => {
          this.cliente = new Cliente();
        }
      });
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.clienteService.atualizar(this.cliente).subscribe({
        complete: () => {
          this.sucesso = true;
          this.mensagemSucesso = 'Cliente atualizado com sucesso!';
          this.errors = [];
        },
        error: (errorResponse) => {
          this.sucesso = false;
          this.errors = errorResponse.error.errors;
        }
      });
    } else {
      this.clienteService.salvar(this.cliente).subscribe({
        next: (response) => {
          this.cliente = response;
        },
        complete: () => {
          this.sucesso = true;
          this.mensagemSucesso = 'Cliente salvo com sucesso!';
          this.errors = [];
        },
        error: (errorResponse) => {
          this.sucesso = false;
          this.errors = errorResponse.error.errors;
        }
      });
    }
  }

  voltarParaListagem(): void {
    this.router.navigate(['/clientes-lista']);
  }

}
