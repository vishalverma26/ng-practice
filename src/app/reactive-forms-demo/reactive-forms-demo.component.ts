import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.scss']
})
export class ReactiveFormsDemoComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenUsernames = ['chris', 'anna'];

  signupForm: FormGroup;
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('vishal', [Validators.required, this.checkForbiddenUsernames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.checkForbiddenEmails.bind(this)])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.statusChanges.subscribe(value => {
      console.log(value);
    });

    this.signupForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const formArrLen = (this.signupForm.get('hobbies') as FormArray).length;
    if(formArrLen >= 10) {
      return;
    }
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  checkForbiddenUsernames(control: FormControl): { [s: string]: boolean } | null {
    // should return someting like:
    // { nameIsForbidden: true }

    if (this.forbiddenUsernames.includes(control.value)) {
      return {
        'nameIsForbidden': true
      }
    }
    return null;
  }

  checkForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({
            'emailIsForbidden': true
          });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }

  filloutForm() {
    const formArrLen = (this.signupForm.get('hobbies') as FormArray).length;
    const hobbiesArr = [];
    if(formArrLen) {
      for(let i = 0; i < formArrLen; i++) {
        hobbiesArr.push(`Sample hobby ${i + 1}`);
      }
    }
    this.signupForm.setValue({
      'userData': {
        'username': 'vishal',
        'email': 'v@g.com'
      },
      'gender': 'male',
      'hobbies': hobbiesArr
    })
  }

  updateUsername() {
    const username = 'vishal' + Math.ceil(Math.random() * 100);
    this.signupForm.patchValue({
      'userData': {
        'username': username
      }
    })
  }

}
