import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterFormComponent } from './footerForm.component';
import { I18nModule, CmsConfig, provideConfig, UrlModule } from '@spartacus/core';


@NgModule({
  declarations: [
    FooterFormComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    UrlModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        footerForm: {
          component: FooterFormComponent
        }
      }
    }),
  ],
})
export class FooterFormModule { }
