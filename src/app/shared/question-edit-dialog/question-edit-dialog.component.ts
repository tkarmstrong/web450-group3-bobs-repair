/*
=====================================
  ; Title: Question Edit Component
  ; Author: Tyler Armstrong, David Tarvin, Aaron Wilson
  ; Date: 29 Oct 2019
  ; Description: Component for editing questions.
======================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-question-edit-dialog',
  templateUrl: './question-edit-dialog.component.html',
  styleUrls: ['./question-edit-dialog.component.css']
})
export class QuestionEditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
