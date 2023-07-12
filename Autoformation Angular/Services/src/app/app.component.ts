import { Component } from '@angular/core';
import { UsersServiceService } from './service/users-service.service';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  listuser:any;
  // name:any;
  // email:any;
  selectindexrow:number=-1;
  selectedRow:any;
  détail=false;
  myuser={
    name:'',
    email:''
  }
  edituserform=false;
  constructor(private usersservice:UsersServiceService){}
  ngOnInit(){
    // this.listuser=this.usersservice.getUsers();
    // console.log(this.usersservice.getUsers())

    this.usersservice.getUsers().subscribe(data=>{
      this.listuser=data;
    })
  }
  videinput(){
    this.myuser={
      name:'',
      email:''
    }
  }
  // addCustomer(formValue:NgForm){
  //   console.log(formValue.value);

  //   const postbody={
  //     name: formValue.value.name,
  //     email: formValue.value.email,
  //   };
  //   console.log(postbody);
  //   this.usersservice.addUser(postbody).subscribe(data=>{
  //     console.log(data);
  //     this.listuser=[data,...this.listuser]
  //   },(err)=>{
  //     console.log("unable to add user"+err);
  //   });
  // }
  saveUser() {
    if (this.edituserform) {
      this.UpdateUser();
    } else {
      this.addUser();
    }
  }
  addUser(){
    this.usersservice.addUser(this.myuser).subscribe(data=>{
      console.log(data);
      this.listuser=[data,...this.listuser];
      this.videinput();
    },(err)=>{
      console.log("unable to add user"+err);
    });
  }

  DeleteUser(id:number){
    this.usersservice.deleteuer(id).subscribe(()=>{
      this.listuser=this.listuser.filter((user:any) => user.id!=id)
    });
  }
  UpdateUser() {
    this.usersservice.updateUser(this.myuser).subscribe(data=>{
      console.log(data);
      this.videinput();
      this.edituserform=false;
    },(err)=>{
      console.log("unable to add user"+err);
    });
  }
  editUser(user:any){
    this.myuser=user;
    this.edituserform=true;
    this.videinput();
  }

  // onSelectItem(index: number){
  //   this.selectindexrow = index;
  //   this.selectedRow = this.listuser[index];
  //   console.log("détails",this.selectedRow);
  //   this.name=this.selectedRow.name
  //   this.email=this.selectedRow.email
  // }

 
  resetForm(formValue:NgForm){
    formValue.resetForm();
  }
}
