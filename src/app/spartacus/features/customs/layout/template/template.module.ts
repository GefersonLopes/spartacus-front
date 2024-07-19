import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { PageSlotModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    PageSlotModule,
  ],
   exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
