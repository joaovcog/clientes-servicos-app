import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicosPrestadosService } from 'src/app/servicos-prestados.service';
import { ServicoPrestadoBusca } from './servicos-prestados-busca';

@Component({
  selector: 'app-servicos-prestados-lista',
  templateUrl: './servicos-prestados-lista.component.html',
  styleUrls: ['./servicos-prestados-lista.component.css']
})
export class ServicosPrestadosListaComponent implements OnInit {

  nome: string | undefined;
  mes: number | undefined;
  meses: number[] = [];
  mensagem: string | undefined;

  servicosPrestados: ServicoPrestadoBusca[] = [];

  constructor(private servicoPrestadoService: ServicosPrestadosService, private router: Router) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
  }

  novoCadastro(): void {
    this.router.navigate(['/servicos-prestados-form']);
  }

  consultar(): void {
    this.servicoPrestadoService.buscar(this.nome, this.mes).subscribe(response => {
      this.mensagem = undefined;
      this.servicosPrestados = response;
      if (this.servicosPrestados.length <= 0) {
        this.mensagem = 'Nenhum registro encontrado.';
      }
    });
  }

}
