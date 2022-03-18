import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente.model';
import { ServicosPrestadosService } from 'src/app/servicos-prestados.service';
import { ServicoPrestado } from '../servicos-prestados.model';

@Component({
  selector: 'app-servicos-prestados-form',
  templateUrl: './servicos-prestados-form.component.html',
  styleUrls: ['./servicos-prestados-form.component.css']
})
export class ServicosPrestadosFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado = new ServicoPrestado();
  sucesso: boolean = false;
  errors: string[] = [];
  mensagemSucesso: string = '';

  constructor(private clienteService: ClientesService, private servicoPrestadoService: ServicosPrestadosService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
    })
  }

  onSubmit(): void {
    this.servicoPrestadoService.salvar(this.servico).subscribe({
      complete: () => {
        this.sucesso = true;
        this.mensagemSucesso = 'Serviço salvo com sucesso!';
        this.errors = [];
        this.servico = new ServicoPrestado();
      },
      error: (errorResponse) => {
        this.sucesso = false;
        this.errors = errorResponse.error.errors;
      }
    });
  }

}
