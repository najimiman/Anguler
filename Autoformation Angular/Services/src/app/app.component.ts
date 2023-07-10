import { Component } from '@angular/core';
import { UsersServiceService } from './service/users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  listuser:any;
  constructor(private usersservice:UsersServiceService){}
  ngOnInit(){
    // this.listuser=this.usersservice.getUsers();
    // console.log(this.usersservice.getUsers())

    this.usersservice.getUsers().subscribe(data=>{
      this.listuser=data;
    })
  }
}
