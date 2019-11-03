/*
; =======================================================
; Title: register.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  // userLogin: string;
  registrationForm: FormGroup;
  // formGroup: FormGroup;
  questions;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.http.get('/api/security-questions').subscribe(res => {
      this.questions = res;
    }, err => {
      console.log(err);
    });
  }

  // '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm'
  // '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
  // /^[0-9]{1,6}$/


  ngOnInit() {

    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('')]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('standard'),
      securityQuestion1: new FormControl('', [Validators.required]),
      answer1: new FormControl('', [Validators.required]),
      securityQuestion2: new FormControl('', [Validators.required]),
      answer2: new FormControl('', [Validators.required]),
      securityQuestion3: new FormControl('', [Validators.required]),
      answer3: new FormControl('', [Validators.required])
    });

  }

  onSubmit() {

    // 1. Get form values
    const username = this.registrationForm.get('username').value;
    const password = this.registrationForm.get('password').value;
    const firstName = this.registrationForm.get('firstName').value;
    const lastName = this.registrationForm.get('lastName').value;
    const phoneNumber = this.registrationForm.get('phoneNumber').value;
    const address = this.registrationForm.get('address').value;
    const email = this.registrationForm.get('email').value;
    const role = this.registrationForm.get('role').value;
    const securityQuestion1 = this.registrationForm.get('securityQuestion1').value;
    const answer1 = this.registrationForm.get('answer1').value;
    const securityQuestion2 = this.registrationForm.get('securityQuestion2').value;
    const answer2 = this.registrationForm.get('answer2').value;
    const securityQuestion3 = this.registrationForm.get('securityQuestion3').value;
    const answer3 = this.registrationForm.get('answer3').value;

    // 2. Create new user object literal from form values
    const newUser = {
      username,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      email,
      role,
      selectedSecurityQuestions: [
        { questionId: securityQuestion1, answerText: answer1 },
        { questionId: securityQuestion2, answerText: answer2 },
        { questionId: securityQuestion3, answerText: answer3 }
      ]
    };
    console.log(newUser);

    // 3. Post new user to db
    const apiBaseURL = '/api/users';

    this.http.post(apiBaseURL, newUser).subscribe(res => {
      if (res) {
        this.cookie.set('isAuthenticated', 'true', 1);
        this.cookie.set(username, 'true', 1);
        this.router.navigate(['/session/user-management']);
      } else {
        this.errorMessage = 'Something went wrong.';
        console.log(`Error: ${this.errorMessage}`);
      }
    });
  }
}
