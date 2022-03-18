import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { HeaderService } from 'src/app/template/topbar/header.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente | undefined;
  mensagemSucesso: string | undefined;
  mensagemErro: string | undefined;

  constructor(private clienteService: ClientesService, private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Clientes',
      routeUrl: '/clientes/lista'
    }
  }

  ngOnInit(): void {
    this.carregarTodos();
  }

  carregarTodos(): void {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
    });
  }

  novoCadastro(): void {
    this.router.navigate(['/clientes/form']);
  }

  prepararExclusao(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
  }

  excluirCliente(): void {
    if (this.clienteSelecionado) {
      this.clienteService.excluir(this.clienteSelecionado).subscribe({
        complete: () => {
          this.mensagemSucesso = 'Cliente excluído com sucesso!';
          this.carregarTodos();
        }, error: (errorResponse) => {
          this.mensagemErro = 'Ocorreu um erro ao excluir o cliente. ';
        }
      });
    }
  }

}
