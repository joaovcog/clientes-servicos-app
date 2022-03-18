import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente.model';
import { ServicosPrestadosService } from 'src/app/servicos-prestados.service';
import { HeaderService } from 'src/app/template/topbar/header.service';
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

  constructor(private clienteService: ClientesService, private servicoPrestadoService: ServicosPrestadosService,
    private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Serviços Prestados',
      routeUrl: '/servicos-prestados/lista'
    }
  }

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

  voltarParaConsulta(): void {
    this.router.navigate(['/servicos-prestados/lista']);
  }

}
