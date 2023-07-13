import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {
  mysearch:any
  constructor(private activatroute:ActivatedRoute){
    this.activatroute.queryParams.subscribe((s)=>{
      console.log(s);
      this.mysearch=s;
    })
  }
}
