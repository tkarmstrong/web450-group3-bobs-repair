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
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  userLogin: string;
  form: FormGroup;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm')
      ])],
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      role: [null, Validators.compose([Validators.required])],
      selectedSecurityQuestions: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    const apiBaseURL = '/api/user/';
    // tslint:disable-next-line: no-string-literal
    const userId = this.form.controls['userId'].value;

    this.http.get(apiBaseURL + userId).subscribe(res => {
      if (res) {
        this.cookie.set('isAuthenticated', 'true', 1);
        this.cookie.set(userId, 'true', 1);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid User ID';
      }
    });
  }
}
