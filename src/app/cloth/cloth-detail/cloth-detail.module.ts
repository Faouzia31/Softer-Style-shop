import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothDetailPageRoutingModule } from './cloth-detail-routing.module';

import { ClothDetailPage } from './cloth-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothDetailPageRoutingModule
  ],
  declarations: [ClothDetailPage]
})
export class ClothDetailPageModule {}
