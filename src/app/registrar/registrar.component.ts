import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  nome: string | undefined;
  username: string | undefined;
  password: string | undefined;
  hasError: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
