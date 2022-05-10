import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionsPageRoutingModule } from './promotions-routing.module';

import { PromotionsPage } from './promotions.page';

import { SharedComponentsModule } from '../components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PromotionsPage]
})
export class PromotionsPageModule {}
