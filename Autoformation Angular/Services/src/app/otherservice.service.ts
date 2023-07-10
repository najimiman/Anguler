import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherserviceService {

  constructor() { }


  tache=[
    {"name": "Task 1", "description": "This is the first task"},
    {"name": "Task 2", "description": "This is the second task"},
    {"name": "Task 3", "description": "This is the third task"}
  ]

  gettaches(){
    return this.tache.slice();
  }
}
