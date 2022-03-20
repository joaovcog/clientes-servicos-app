import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiURL}/clientes`;
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString || '{}');
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }

    return this.http.post<Cliente>(this.baseUrl, cliente, { headers });
  }

  getClientes(): Observable<Cliente[]> {
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString || '{}');
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.get<Cliente[]>(this.baseUrl, { headers });
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  atualizar(cliente: Cliente): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${cliente.id}`, cliente);
  }

  excluir(cliente: Cliente): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cliente.id}`);
  }

}
