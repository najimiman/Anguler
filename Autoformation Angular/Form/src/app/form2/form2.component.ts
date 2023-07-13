import { Component } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  addLoadform:FormGroup;

  constructor(private fb:FormBuilder){
    this.addLoadform = new FormGroup({
      'name':new FormControl(),
      'description':new FormControl(),
    });
  }

  ngOnInit() {
    //validators
    this.addLoadform=this.fb.group({
      'name':new FormControl('',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4)

      ]),

      'description':new FormControl('',Validators.required),
    })
  }

  addloadType(){
    console.log(this.addLoadform.pristine);
   
    console.log(this.addLoadform.value);
    console.log(this.addLoadform. valid);
    console.log(this.addLoadform.invalid);
    console.log(this.addLoadform.pending);
    console.log(this.addLoadform.dirty);
    console.log(this.addLoadform. touched);
    console.log(this.addLoadform. untouched);
  }
}
