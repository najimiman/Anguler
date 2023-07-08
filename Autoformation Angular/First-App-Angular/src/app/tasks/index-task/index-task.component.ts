import { Component } from '@angular/core';
import { Taches } from '../taches.module';

@Component({
  selector: 'app-index-task',
  templateUrl: './index-task.component.html',
  styleUrls: ['./index-task.component.scss']
})
export class IndexTaskComponent {
  constructor() { }
taches:Taches[]=[
  {"name": "Task 1", "description": "This is the first task"},
  {"name": "Task 2", "description": "This is the second task"},
  {"name": "Task 3", "description": "This is the third task"}
]

displayedColumns: string[] = ['name', 'description','add'];
dataSource = this.taches;
clickedRows = new Set<Taches>();
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log("mmm",this.taches);
}

}
