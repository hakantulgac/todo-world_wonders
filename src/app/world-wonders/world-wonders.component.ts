import { Component, OnInit } from '@angular/core';
import { WorldWondersService } from '../services/world-wonders.service';
import { WorldWonders } from '../models/world-wonders';

@Component({
  selector: 'app-world-wonders',
  templateUrl: './world-wonders.component.html',
  styleUrls: ['./world-wonders.component.scss']
})
export class WorldWondersComponent implements OnInit{
  wwData: WorldWonders[] | undefined;
  constructor(private wwService: WorldWondersService){}

  ngOnInit(): void {
    this.wwService.getWorldWonders().subscribe(
      (res)=>{this.wwData = res},
      (err)=>{console.log(err)}
    )
  }
}
