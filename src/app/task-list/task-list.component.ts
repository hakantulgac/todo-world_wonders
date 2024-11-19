import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  dateParam: string | undefined = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dateParam = this.route.snapshot.params['date'];
    this.tasks = this.tasks.filter(i=>i.ts===this.dateParam);
  }

  tasks: Task[] = [
    new Task("Add list","1102024"),
    new Task("Learn about state","2102024"),
    new Task("Don't forget router","1102024"),
    new Task("Services and more specific topic is http requests","2102024"),
    new Task("Media player for videos","1102024")
  ];

  addItem(item: HTMLInputElement, tasksTable: NzTableComponent<Task>) {
    if (item.value !== "") {
      this.tasks.push(new Task(item.value,this.dateParam||""));
      tasksTable.data = this.tasks;
      item.value = "";
    }
  }

  deleteItem(item: Task) {
    this.tasks = this.tasks.filter(i => i !== item)
  }

  updateItem(item: Task) {
    item.isDone = !item.isDone;
  }
}

class Task {
  constructor(public title: string, public ts:string) { }
  public isDone: boolean = false;
}
