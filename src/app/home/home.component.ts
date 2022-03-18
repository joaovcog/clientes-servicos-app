import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/topbar/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
