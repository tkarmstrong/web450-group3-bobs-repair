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
      password: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('standard'),
      securityQuestion1: new FormControl('', Validators.required),
      answer1: new FormControl('', Validators.required),
      securityQuestion2: new FormControl('', Validators.required),
      answer2: new FormControl('', Validators.required),
      securityQuestion3: new FormControl('', Validators.required),
      answer3: new FormControl('', Validators.required)
    });

  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
