import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  GlobalMessageComponentModule,
  KeyboardFocusModule,
  OutletModule,
  OutletRefModule,
  PageLayoutModule,
  PageSlotModule,
  SkipLinkModule
} from '@spartacus/storefront';
import { CustomStoreFrontComponent } from './custom-store-front.component';
import { TemplateModule } from '../template/template.module';



@NgModule({
  declarations: [CustomStoreFrontComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageLayoutModule,
    PageSlotModule,
    KeyboardFocusModule,
    SkipLinkModule,
    TemplateModule,
  ],
  exports: [CustomStoreFrontComponent],
})
export class CustomStoreFrontModule { }
