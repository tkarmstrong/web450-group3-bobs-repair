/*
; =======================================================
; Title: question-add.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date: 08 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  addQuestionForm: FormGroup;
  securityQuestion: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.addQuestionForm = new FormGroup({
      securityQuestion: new FormControl('', [Validators.required])
    })
  }

  addQuestion() {
    const questionText = this.addQuestionForm.get('securityQuestion').value;

    const newQuestion = { questionText };
    console.log(newQuestion);

    this.http.post('/api/security-questions', newQuestion).subscribe(res => {
      if (res) {
        console.log('Question ' + questionText + ' added to list');
        this.router.navigate(['/session/security-questions']);
      } else {
        console.log('Something went wrong');
      }
    })
  }

  cancel() {
    this.router.navigate(['/session/security-questions']);
  }

}
