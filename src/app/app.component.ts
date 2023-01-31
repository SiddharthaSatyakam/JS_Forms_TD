import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') assignForm : NgForm;
  subscriptions: string[]=['Basic','Advanced','Pro']
  submitted=false;
  formData={
    email:'',
    password:'',
    sub:''
  }

  onSubmit(){
    this.submitted=true;

    console.log(this.formData)

    this.formData.email=this.assignForm.value.emailId;
    this.formData.password=this.assignForm.value.passKey;
    this.formData.sub=this.assignForm.value.subscription;

    this.assignForm.reset();

  }

}
