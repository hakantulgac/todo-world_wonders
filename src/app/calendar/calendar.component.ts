import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  constructor(private router: Router){}
  
  onValueChange(value: Date): void {
    var day: number = value.getDate();
    var month: number = value.getMonth();
    var year: number = value.getFullYear();

    var dateValue: string = ""+day+month+year;
    this.router.navigateByUrl(`/tasks/${dateValue}`);
  }
}
