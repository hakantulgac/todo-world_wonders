import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    NzCalendarModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
