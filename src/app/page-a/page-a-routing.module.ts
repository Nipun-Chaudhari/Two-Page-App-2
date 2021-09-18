import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAPage } from './page-a.page';

const routes: Routes = [
  {
    path: '',
    component: PageAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAPageRoutingModule {}
