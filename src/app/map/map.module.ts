import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { mapRoutes } from './map.routes';
import { MapComponent } from './map.component';
import { GaodeMapComponent } from './gaode-map/gaode-map.component';
import { AmapComponent } from './gaode-map/amap/amap.component';

@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(mapRoutes)
  ],
  declarations: [
    MapComponent,
    GaodeMapComponent,
    AmapComponent
  ]
})
export class MapModule { }
