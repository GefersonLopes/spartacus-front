import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerModule } from './timer/timer.module';
import { FooterFormModule } from './footerForm/footerForm.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimerModule,
  ],
  exports: [
    TimerModule,
    FooterFormModule,
  ],
})
export class CMSModule { }
