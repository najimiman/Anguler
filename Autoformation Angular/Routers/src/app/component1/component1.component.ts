import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  myparams:any;
constructor(private activatedroute:ActivatedRoute){
  this.activatedroute.params.subscribe((params)=>{
    console.log(params);
    this.myparams=params;
  })
}


}
