import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalesPageRoutingModule } from './principales-routing.module';

import { PrincipalesPage } from './principales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalesPageRoutingModule
  ],
  declarations: [PrincipalesPage]
})
export class PrincipalesPageModule {}
