import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'João';
    cliente.cpf = '11111111';
    cliente.dataCadastro = '17/03/2022';

    return cliente;
  }
}
