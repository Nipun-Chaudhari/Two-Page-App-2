import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAPageRoutingModule } from './page-a-routing.module';

import { PageAPage } from './page-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAPageRoutingModule
  ],
  declarations: [PageAPage]
})
export class PageAPageModule {}
