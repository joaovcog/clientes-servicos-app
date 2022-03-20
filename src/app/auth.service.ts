import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './registrar/usuario.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.apiURL + '/usuarios';
  tokenURL: string = environment.apiURL + environment.urlObterToken;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

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

    return this.http.post<void>(this.tokenURL, params.toString(), { headers });
  }

  encerrarSessao(): void {
    localStorage.removeItem('access_token');

  }

  getUsuarioAutenticado() {
    const token = this.obterToken();

    if (token) {
      const usuario = this.jwtHelper.decodeToken(token).user_name;

      return usuario;
    }

    return null;
  }

  obterToken() {
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const token = JSON.parse(tokenString).access_token;
      return token;
    }

    return null;
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();

    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);

      return !expired;
    }

    return false;
  }
}
