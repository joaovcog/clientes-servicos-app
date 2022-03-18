import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente.model';

@Component({
  selector: 'app-servicos-prestados-form',
  templateUrl: './servicos-prestados-form.component.html',
  styleUrls: ['./servicos-prestados-form.component.css']
})
export class ServicosPrestadosFormComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
    })
  }

  onSubmit(): void {
    console.log('submit');
  }

}
