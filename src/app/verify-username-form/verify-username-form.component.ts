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

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

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
        console.log(this.user.selectedSecurityQuestions[0].answerText);
        this.question1 = this.user.selectedSecurityQuestions[0].questionText;
        this.question2 = this.user.selectedSecurityQuestions[1].questionText;
        this.question3 = this.user.selectedSecurityQuestions[2].questionText;

        this.router.navigate(['/verify-security-questions/'], {queryParams: {username: username}, skipLocationChange: true});
      }
    }, err => {
      console.log(err);
    });
  }



}
