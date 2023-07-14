import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent {
constract$:any;
users:any;
userStatus:any;
listusers$:any;
details:any;
constructor(private myservice:MyServiceService){}

ngOnInit():void{
  //Exemple 1
  this.users=['a','b','c','d'];
  this.constract$=Array.of(this.users);
  console.log(this.constract$)
//Exemple 2
  new Observable(observer=>{
    setTimeout(() => {
      observer.next('In progress');
    }, 2000);

    setTimeout(() => {
      observer.next('Pending');
    }, 4000);

    setTimeout(() => {
      observer.next('Completed');
    }, 6000);
  }).subscribe(data=>{
    this.userStatus=data;
  },error=>{
    console.log(error);
  })
//exemple 3 ->subscirbe
this.myservice.getuser().subscribe((data:any)=>{
  console.log(data);
  this.listusers$=data;
})
// ->topromise
this.myservice.edituser().toPromise().then(response=>{
  this.details=response;
})
.catch(error=>{
  console.log(error)
})
.finally(()=>{
  console.log('user détail loaded');
})
}
}
