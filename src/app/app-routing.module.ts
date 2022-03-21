import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cloth',
    loadChildren: () => import('./cloth/cloth.module').then( m => m.ClothPageModule)
  },

  {
    path: '',
    redirectTo: 'cloth',
    pathMatch: 'full'
  },
  {
    path: 'new',
    loadChildren: () => import('./cloth/new-item/new-item.module').then( m => m.NewItemPageModule)
  },
  {
    path: 'd/:id',
    loadChildren: () => import('./cloth/cloth-detail/cloth-detail.module').then( m => m.ClothDetailPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./cloth/update/update.module').then( m => m.UpdatePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
