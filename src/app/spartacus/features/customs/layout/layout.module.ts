import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStoreFrontComponent } from './custom-store-front/custom-store-front.component';
import { CustomStoreFrontModule } from './custom-store-front/custom-store-front.module';
import { layoutConfig } from './layout-config';
import { provideConfig } from '@spartacus/core';



@NgModule({
  imports: [
    CommonModule,
    CustomStoreFrontModule,
  ],
  exports: [CustomStoreFrontModule],
  providers: [
    provideConfig(layoutConfig)
  ],
})
export class LayoutModule { }
