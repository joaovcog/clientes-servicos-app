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

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  atualizar(cliente: Cliente): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${cliente.id}`, cliente);
  }

}
