import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  I18nModule,
  provideConfig,
  UrlModule,
} from '@spartacus/core';
import { PageSlotModule } from '@spartacus/storefront';
import { CustomLoginComponent } from './login.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, MatTooltipModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        LoginComponent: {
          component: CustomLoginComponent,
        },
      },
    }),
  ],
  declarations: [CustomLoginComponent],
})
export class CustomLoginModule {}
