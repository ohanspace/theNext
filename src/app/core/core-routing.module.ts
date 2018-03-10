import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'page',
        loadChildren: 'app/page/page.module#PageModule'
    },
    {
      path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
