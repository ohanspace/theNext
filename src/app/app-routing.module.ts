import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
const routes: Routes = [
    {
      path: '',
      redirectTo: 'store',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'page',
      loadChildren:  'app/page/page.module#PageModule'
    },
    {
      path: 'store',
      loadChildren:  'app/store/store.module#StoreModule'
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
export class AppRoutingModule { }
