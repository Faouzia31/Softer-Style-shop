import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothPage } from './cloth.page';

const routes: Routes = [
  {
    path: '',
    component: ClothPage
  },
  {
    path: ':id',
    loadChildren: () => import('./cloth-detail/cloth-detail.module').then( m => m.ClothDetailPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothPageRoutingModule {}
