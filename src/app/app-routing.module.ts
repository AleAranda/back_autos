import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'paginas', loadChildren: () => import('./@paginas/paginas.module').then(m => m.PaginasModule) 
  },
  {
    path: '',
    redirectTo:'paginas',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'paginas'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
