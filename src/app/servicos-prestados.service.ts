import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestadoBusca } from './servicos-prestados/servicos-prestados-lista/servicos-prestados-busca';
import { ServicoPrestado } from './servicos-prestados/servicos-prestados.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosPrestadosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiURL}/servicos-prestados`;
  }

  salvar(servico: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.baseUrl, servico);
  }

  buscar(nome: string | undefined, mes: number | undefined): Observable<ServicoPrestadoBusca[]> {
    let httpParams = new HttpParams();

    if (!nome) {
      nome = '';
    }

    httpParams = httpParams.set('nome', nome);

    if (mes) {
      httpParams = httpParams.set('mes', mes.toString());
    }

    const url = this.baseUrl + '?' + httpParams.toString();
    return this.http.get<ServicoPrestadoBusca[]>(url);
  }
}
