import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { ServicosPrestadosModule } from './servicos-prestados/servicos-prestados.module';
import { ServicosPrestadosService } from './servicos-prestados.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    TemplateModule,
    ClientesModule,
    ServicosPrestadosModule
  ],
  providers: [
    ClientesService,
    ServicosPrestadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
