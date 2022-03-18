import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    const title = this.headerService.headerData.title;

    return title ? title : '';
  }

  get routeUrl(): string {
    const routeUrl = this.headerService.headerData.routeUrl;

    return routeUrl ? routeUrl : '';
  }

}
