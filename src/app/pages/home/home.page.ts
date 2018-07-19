import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.myForm = formBuilder.group({
      name: [''],
      comment: [''],
      random: [0.5]
    });

  }

  changeValue(){
    this.myForm.controls.random.setValue(0.2);
  }

  checkValues(){
    console.log(this.myForm.value);
  }

}
