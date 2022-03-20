import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  usuarioLogado: string | undefined;

  constructor(private headerService: HeaderService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
  }

  get title(): string {
    const title = this.headerService.headerData.title;

    return title ? title : '';
  }

  get routeUrl(): string {
    const routeUrl = this.headerService.headerData.routeUrl;

    return routeUrl ? routeUrl : '';
  }

  logout(): void {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

}
