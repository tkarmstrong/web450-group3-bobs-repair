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
import { SecurityQuestionService } from '../../shared/services/security-question.service';
import { MatDialog } from '@angular/material';
import { QuestionEditDialogComponent } from '../../shared/question-edit-dialog/question-edit-dialog.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css'],
  providers: [SecurityQuestionService]
})
export class SecurityQuestionsComponent implements OnInit {

  displayedColumns: string[] = ['questionText', 'actions'];
  data;

  constructor(
    private securityService: SecurityQuestionService,
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.securityService.get()
      .subscribe(res => {
        this.data = res;
      });
  }

  addNew() {

  }

  delete() {

  }

  edit(questionId) {

    // 1. Get question user selected to edit
    const question = this.securityService.getQuestionById(questionId);
    console.log(question);

    // 2. Open dialog form with user's selected question
    // const dialogRef = this.dialog.open(QuestionEditDialogComponent, {
    //   width: '80%',
    //   height: '600px',
    //   data: question
    // });

    // 3. Save user's changes to db

    // 4. Reload table
    // dialogRef.afterClosed().subscribe(result => { location.reload(); });
  }

}
