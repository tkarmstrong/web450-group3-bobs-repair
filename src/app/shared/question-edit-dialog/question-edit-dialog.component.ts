/*
; =======================================================
; Title:  question-edit-dialog.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-question-edit-dialog',
  templateUrl: './question-edit-dialog.component.html',
  styleUrls: ['./question-edit-dialog.component.css']
})
export class QuestionEditDialogComponent implements OnInit {
  errorMessage: string;
  editForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      selectedQuestion: [null, Validators.compose([Validators.required])]
    });

    // tslint:disable-next-line: no-string-literal
    this.editForm.controls['selectedQuestion'].setValue(this.data.questionText);
  }

  onSubmit() {
    console.log(this.editForm.value);
  }

}
