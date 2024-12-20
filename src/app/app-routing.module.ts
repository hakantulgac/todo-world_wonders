import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { WorldWondersComponent } from './world-wonders/world-wonders.component';

const routes: Routes = [
  {component: CalendarComponent, path:""},
  {component: TaskListComponent, path:"tasks/:date"},
  {component: WorldWondersComponent, path:"wonders"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
