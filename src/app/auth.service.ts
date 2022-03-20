import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './registrar/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.apiURL + '/usuarios';
  tokenURL: string = environment.apiURL + environment.urlObterToken;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<void> {
    return this.http.post<void>(this.baseUrl, usuario);
  }

  logar(username: string, password: string): Observable<void> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    console.log(params.toString());
    return this.http.post<void>(this.tokenURL, params.toString(), { headers });
  }
}
