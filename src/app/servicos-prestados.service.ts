import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
