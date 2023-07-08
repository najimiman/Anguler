import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements  OnChanges, OnInit, DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy{
  constructor() { }
  roleId = 0;
  n1=1;
  n2=3;
  admin:boolean=false;
  role:boolean=true;
  imgsrc = 'https://placekitten.com/640/360';
  isdisabled:boolean=false;
  nom:string="aya";
  users=[
    {
      "id": 1,
      "nom": "John",
      "age": 25
    },
    {
      "id": 2,
      "nom": "Jane",
      "age": 30
    },
    {
      "id": 3,
      "nom": "Bob",
      "age": 40
    }
  ]
  ngOnInit(): void{
  this.sum();
  this.add();
  setTimeout(()=>{
    this.isdisabled=true;
  },3000);
}
onKeyUp(e:any){
  // console.log(e);
  // console.log((<HTMLInputElement>e.target).value);
  this.nom=(<HTMLInputElement>e.target).value;
}
onClick(nom:any){
  alert(nom);
}
  sum():void {
  console.log(this. roleId);
  console.log("This is a sum method");
  }
  add(){
    console.log(this.n1+this.n2);
  }
  

  ngOnChanges() :void{
    console.log('ngOnChanges');
  }

  ngDoCheck() :void{
    console.log('ngDoCheck');
  }

  ngAfterContentInit() :void{
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() :void{
    console.log('ngAfterContentChecked');
  }

@ViewChild("pp")
pp?:ElementRef;

  ngAfterViewInit() :void{
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() :void{
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() :void{
    console.log('ngOnDestroy');
  }
}
