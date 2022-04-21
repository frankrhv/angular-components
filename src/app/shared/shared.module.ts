import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule],
  exports: [DividerComponent], //export all its components to be accessed by other modules
})
export class SharedModule {}
