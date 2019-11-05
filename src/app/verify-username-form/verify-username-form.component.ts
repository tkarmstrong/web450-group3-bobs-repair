/*
; =======================================================
; Title:  verify-username-form.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { logging } from 'protractor';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-username-form',
  templateUrl: './verify-username-form.component.html',
  styleUrls: ['./verify-username-form.component.css']
})
export class VerifyUsernameFormComponent implements OnInit {
  form1: FormGroup;
  user: any;
  question1: any;
  question2: any;
  question3: any;
  notAUser: boolean;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.notAUser = false;
  }

  ngOnInit() {
    this.form1 = this.fb.group({
      username: [null, Validators.compose([Validators.required])]
    });
  }

  validateUsername() {
    const username = this.form1.controls['username'].value;
    this.http.get('/api/users/username/' + username).subscribe(res => {
      if (res) {
        this.user = res;
        this.router.navigate(['/verify-security-questions/'], {queryParams: {username: username}, skipLocationChange: true});
      } else {
        return this.notAUser = true;
      }
    }, err => {
      console.log(err);
    });
  }



}
