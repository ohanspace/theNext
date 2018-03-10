import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {PageDetailComponent} from './page-detail/page-detail.component';

const routes: Routes = [
    {
        path: 'detail/:id',
        component: PageDetailComponent
    },
    {
        path: '',
        component: PagesComponent
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
