import { Injectable } from '@angular/core';
import { OtherserviceService } from '../otherservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  // private otherservice:OtherserviceService
  constructor(private http:HttpClient) { }
   
 addUser(body:any){
  
  return this.http.post('https://jsonplaceholder.typicode.com/posts',body)
 }

 deleteuer(id:number){
  return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
 }
 updateUser(user:any) {
  // const putBody = {
  //   name: 'iman',
  //   email: 'dd',
  //   userId: 1
  // };
  return this.http.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
}

  getUsers(){
    const headers=new HttpHeaders({
      'content-type':'application/json',
      'authentificationToken':'123456789'
    })
    // console.log( this.otherservice.gettaches())
    // return this.users.slice();
    return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:headers});
  
  }
  
}
