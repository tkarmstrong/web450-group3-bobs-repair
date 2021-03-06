/*
; =======================================================
; Title:  verify-security-questions.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-security-questions-form',
  templateUrl: './verify-security-questions-form.component.html',
  styleUrls: ['./verify-security-questions-form.component.css']
})
export class VerifySecurityQuestionsFormComponent implements OnInit {

  selectedSecurityQuestions: any;
  user: any;
  question1: string;
  question2: string;
  question3: string;
  answer1: string;
  answer2: string;
  answer3: string;
  username: string;
  form: FormGroup;
  wrongAnswer: boolean;

  constructor(private route: ActivatedRoute, private router: Router,
              private http: HttpClient, private fb: FormBuilder) {
    this.wrongAnswer = false;
    this.username = this.route.snapshot.queryParamMap.get('username');
    console.log(this.username);

    this.http.get('/api/users/' + this.username + '/security-questions').subscribe(res => {
      this.selectedSecurityQuestions = res;
      console.log('this.selectedSecurityQuestions is ' + this.selectedSecurityQuestions);

      // this.question1 = this.selectedSecurityQuestions[0].questionText;
      // console.log('This.question1 is ' + this.question1);
      // this.answer1 = this.selectedSecurityQuestions[0].answerText;
      // console.log('The answer to question1 is ' + this.answer1);
      // this.question2 = this.selectedSecurityQuestions[1].questionText;
      // console.log('This.question2 is ' + this.question2);
      // this.answer2 = this.selectedSecurityQuestions[1].answerText;
      // console.log('The answer to question2 is ' + this.answer2);
      // this.question3 = this.user.selectedSecurityQuestions[2].questionText;
      // console.log('This.question3 is ' + this.question3);
      // this.answer3 = this.user.selectedSecurityQuestions[2].answerText;
      // console.log('The answer to question3 is ' + this.answer3);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Going into POST find-by-ids');
      this.http.post('/api/security-questions/find-by-ids', {
        question1: this.selectedSecurityQuestions[0].questionId,
        question2: this.selectedSecurityQuestions[1].questionId,
        question3: this.selectedSecurityQuestions[2].questionId,
      }).subscribe(res => {
        this.question1 = res[0].questionText;
        this.question2 = res[1].questionText;
        this.question3 = res[2].questionText;
      });
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      answerToSecurityQuestion1: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion2: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion3: [null, Validators.compose([Validators.required])]
    })
  }

  verifySecurityQuestions() {
    const answerToSecurityQuestion1 = this.form.controls['answerToSecurityQuestion1'].value;
    const answerToSecurityQuestion2 = this.form.controls['answerToSecurityQuestion2'].value;
    const answerToSecurityQuestion3 = this.form.controls['answerToSecurityQuestion3'].value;

    // if (answerToSecurityQuestion1 == this.answer1 && answerToSecurityQuestion2 == this.answer2 && answerToSecurityQuestion3 == this.answer3) {
    //   this.router.navigate(['/reset-password'], {queryParams: {isAuthenticated: 'true', username: this.username}, skipLocationChange: true});
    // } else {
    //   this.wrongAnswer = true;
    //   console.log('Unable to verify security question answers');
    // }
    console.log('Going into POST verify answers');
    this.http.post('/api/verify/users/' + this.username + '/security-questions', {
      answerToSecurityQuestion1: answerToSecurityQuestion1,
      answerToSecurityQuestion2: answerToSecurityQuestion2,
      answerToSecurityQuestion3: answerToSecurityQuestion3
    }).subscribe(res => {
      if (res['auth']) {
        this.router.navigate(['/reset-password'], {queryParams: {isAuthenticated: 'true', username: this.username}, skipLocationChange: true});
      } else {
        this.wrongAnswer = true;
        console.log('Unable to verify security question answers');
      }
    });
  }
}
