/*
; =======================================================
; Title: security-questions.component.ts (Week 6)
; Authors: Tyler Armstrong, David Tarvin, [Aaron Wilson]
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {

  displayedColumns: string[] = ['question-id', 'question'];
  securityQuestions: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/api/security-questions').subscribe(data => {
      this.securityQuestions = data;
      console.log(this.securityQuestions);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
