import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  myform:any={
    name:'',
    description:'',
    check:false,
    selectville:''
  }
  ngOnInit(){
  }
  loadvalue(formvalue:NgForm){
    // const taskdétails={
    this.myform.name='name1',
    this.myform.description='dese1',
    this.myform.check=true,
    this.myform.selectville='fes'
    
  // }
    formvalue.setValue(this.myform)
  
  }

  submitform(formvalue:NgForm){
    console.log(formvalue);
    console.log(formvalue.value)
  }
  resetForm(formvalue:NgForm){
    formvalue.reset();
  }
}
