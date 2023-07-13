import { Component, EventEmitter, Input, Output } from '@angular/core';
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
@Output() selectmyrow=new EventEmitter<Taches>();

displayedColumns: string[] = ['name', 'description','add'];
dataSource = this.taches;
clickedRows = new Set<Taches>();
selectedRowIndex: number = -1;//aucune ligne n'est sélectionnée dans la table au départ
selectedRow: any;//any représente n'importe quel type de données

// name!:string
// description!:string

name:string="";
description:string="";

ngOnInit(): void {
  console.log("taches",this.taches);
}


  onSelectItem(index: number){
    this.selectedRowIndex = index;
    this.selectedRow = this.taches[index];
    console.log("aa",this.selectedRow);
    this.name=this.selectedRow.name
    this.description=this.selectedRow.description
  }
  // onKeyUp(event: any) {
  //   this.name = event.target.value;
  //   this.description = event.target.value;
  // }


  Addtask(){
    if(this.name.valueOf()!="" && this.description.valueOf()!=""){
    this.taches.push({name:this.name,description:this.description})
  }
  else{
    alert("remplir formulaire");
  }
    // this.name = '';
    // this.description=''
  }
  Deletetask(index:number){
    this.taches.splice(index)
  }
  Updatetask(name:string,description:string){
    this.taches[this.selectedRowIndex] = {name,description};
  }
}
