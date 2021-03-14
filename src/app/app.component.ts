import { Component, OnInit } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors = [];
  boxColor=['violet','indigo','blue','green','yellow','orange','red','pink'];

  drop(event: CdkDragDrop<any>) {
    this.colors[event.previousContainer.data.index]=event.container.data.item;
    this.colors[event.container.data.index]=event.previousContainer.data.item;
    console.log(this.colors);
  }

  ngOnInit(){
    this.colors = [...this.boxColor,...this.boxColor,...this.boxColor,...this.boxColor,...this.boxColor,...this.boxColor,...this.boxColor,...this.boxColor];
  }
}
 