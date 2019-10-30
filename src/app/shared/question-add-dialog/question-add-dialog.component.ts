/*
=====================================
  ; Title: Add Question Component
  ; Author: Tyler Armstrong
  ; Date: 30 Oct 2019
  ; Description: Component for adding a question.
======================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-question-add-dialog',
  templateUrl: './question-add-dialog.component.html',
  styleUrls: ['./question-add-dialog.component.css']
})
export class QuestionAddDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
