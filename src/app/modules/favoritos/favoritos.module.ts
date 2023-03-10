import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosPageComponent } from './pages/favoritos-page/favoritos-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FavoritosPageComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule,
    SharedModule
  ]
})
export class FavoritosModule { }
