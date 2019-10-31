/*
; =======================================================
; Title:  question-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   30 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-delete-dialog',
  templateUrl: './question-delete-dialog.component.html',
  styleUrls: ['./question-delete-dialog.component.css']
})
export class QuestionDeleteDialogComponent implements OnInit {

  questionText: any;

  constructor(private dialogRef: MatDialogRef<QuestionDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private router: Router) {
    this.questionText = data.questionText;
    console.log(this.questionText);
  }

  ngOnInit() {
  }

}
