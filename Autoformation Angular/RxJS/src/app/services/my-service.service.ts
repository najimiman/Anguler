import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User{
  name:string,
  email:string,
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  getuser():Observable<object>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
  }
  edituser():Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.typicode.com/posts/1');
  }
}
