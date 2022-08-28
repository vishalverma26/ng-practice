import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms-demo',
  templateUrl: './template-forms-demo.component.html',
  styleUrls: ['./template-forms-demo.component.scss']
})
export class TemplateFormsDemoComponent implements OnInit {

  @ViewChild('userForm') uform: NgForm;
  uname: string = 'vishal';
  ques: string = 'pet';
  submitted: boolean = false;
  emailId: string = 'v@v';
  quesAnswer: string;
  genders = ['male', 'female', 'other'];
  user = {
    username: '',
    email: '',
    gender: '',
    secretQuestion: '',
    answer: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.uform.setValue({
    //   uname: suggestedName,
    //   email: 'vishal@v.com',
    //   gender: 'male',
    //   userData: {
    //     secret: 'teacher',
    //     questionAnswer: ''
    //   }
    // });

    this.uform.form.patchValue({
      uname: suggestedName
    });
  }

  onSubmit(f: NgForm) {
    // console.log(f, this.uform, this.user);
    this.submitted = true;
    this.user.email = this.uform.value.email;
    this.user.username = this.uform.value.uname;
    this.user.secretQuestion = this.uform.value.userData.secret;
    this.user.answer = this.uform.value.userData.answer;
    this.user.gender = this.uform.value.gender;

    this.uform.reset();
  }

}
