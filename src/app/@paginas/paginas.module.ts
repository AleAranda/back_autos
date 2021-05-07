import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';

import { PaginasComponent } from './paginas.component';
import { HeaderComponent } from '../@compartidos/header/header.component';
import { FooterComponent } from '../@compartidos/footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    PaginasComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ServiciosComponent,
    ClientesComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
