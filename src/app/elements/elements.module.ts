import { SharedModule } from './../shared/shared.module';
import { DividerComponent } from './../shared/divider/divider.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, SegmentComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModule], //import SharedModule to access its components
  exports: [],
})
export class ElementsModule {}
