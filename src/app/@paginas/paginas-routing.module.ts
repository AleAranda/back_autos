import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { 
    path: 'inicio', 
    component: PaginasComponent,
  },
  {
    path:'nosotros',
    component: NosotrosComponent,
  },
  {
    path:'servicios',
    component: ServiciosComponent,
  },
  {
    path:'clientes',
    component: ClientesComponent,
  },
  {
    path:'contacto',
    component: ContactoComponent,
  },
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
