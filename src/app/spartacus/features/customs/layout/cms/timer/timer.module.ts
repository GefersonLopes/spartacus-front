import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { CmsConfig, provideConfig } from '@spartacus/core';



@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        timer: {
          component: TimerComponent
        }
      }
    }),
  ],
})
export class TimerModule { }
