import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothPageRoutingModule } from './cloth-routing.module';

import { ClothPage } from './cloth.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothPageRoutingModule,
  ],
  declarations: [ClothPage]
})
export class ClothPageModule {}
