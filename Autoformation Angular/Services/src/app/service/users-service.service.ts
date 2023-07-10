import { Injectable } from '@angular/core';
import { OtherserviceService } from '../otherservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private otherservice:OtherserviceService,private http:HttpClient) { }
  // users=[
  //   {
  //     "id": 1,
  //     "nom": "John",
  //     "age": 25
  //   },
  //   {
  //     "id": 2,
  //     "nom": "Jane",
  //     "age": 30
  //   },
  //   {
  //     "id": 3,
  //     "nom": "Bob",
  //     "age": 40
  //   }
  // ]

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
