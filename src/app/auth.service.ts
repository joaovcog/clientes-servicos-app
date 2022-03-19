import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './registrar/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.apiURL + "/usuarios";

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<void> {
    return this.http.post<void>(this.baseUrl, usuario);
  }
}
