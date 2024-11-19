import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldWondersComponent } from './world-wonders.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [
    WorldWondersComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule
  ],
  exports:[
    WorldWondersComponent
  ]
})
export class WorldWondersModule { }
