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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-edit-dialog',
  templateUrl: './question-edit-dialog.component.html',
  styleUrls: ['./question-edit-dialog.component.css']
})
export class QuestionEditDialogComponent implements OnInit {
  errorMessage: string;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private http: HttpClient,
    public dialogRef: MatDialogRef<QuestionEditDialogComponent>) { }

  ngOnInit() {
    this.form = this.fb.group({
      questionText: [null, Validators.compose([Validators.required])]
    });

    // tslint:disable-next-line: no-string-literal
    this.form.controls['questionText'].setValue(this.data.questionText);
  }

  onSubmit() {
    // 3. Save user's edits to db
    this.http.put(`/api/security-questions/update/${this.data._id}`, {
      // tslint:disable-next-line: no-string-literal
      questionText: this.form.controls['questionText'].value
    }).subscribe(res => {
      this.dialogRef.close();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
