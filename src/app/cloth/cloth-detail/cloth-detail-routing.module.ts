import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothDetailPage } from './cloth-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClothDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothDetailPageRoutingModule {}
