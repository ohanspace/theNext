import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'page',
      pathMatch: 'full'
    },
    {
      path: 'page',
      loadChildren: 'app/page/page.module#PageModule'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
