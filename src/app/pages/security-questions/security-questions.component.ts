/*
; =======================================================
; Title: security-questions.component.ts (Week 6)
; Authors: [Tyler Armstrong], [David Tarvin], [Aaron Wilson]
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { SecurityQuestionService } from '../../shared/services/security-question.service';
import { MatDialog } from '@angular/material';
import { QuestionEditDialogComponent } from '../../shared/question-edit-dialog/question-edit-dialog.component';
import { QuestionDeleteDialogComponent } from './../../shared/question-delete-dialog/question-delete-dialog.component';
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
  // dialogRef;
  questions: any;
  question: any;

  constructor(
    private securityService: SecurityQuestionService,
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.securityService.get()
      .subscribe(res => {
        this.data = res;
      });
  }

  addNew() {

  }

  delete(questionId, questionText) {
    const dialogRef = this.dialog.open(QuestionDeleteDialogComponent, {
      data: {
        questionText: questionText
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm') {
        this.http.delete('/api/security-questions/' + questionId).subscribe(res => {
          console.log('Security Question deleted');
          this.data = this.data.filter(u => u._id !== questionId);
        })
      } else if(result === 'cancel') {
        this.router.navigate(['/session/security-questions']);
      }
    })
  }

  edit(questionId) {
    // 1. Get selected question
    this.securityService.getQuestionById(questionId)
      .subscribe(res => { this.question = res; },
        err => { console.log(err); },
        () =>  {

        // 2. Open Dialog
        const dialogRef = this.dialog.open(QuestionEditDialogComponent, {
          width: '80%',
          height: '600px',
          data: this.question
        });

        // 3. Save user's changes to db
          // * See dialog

        // 4. Reload table
        dialogRef.afterClosed().subscribe(result => { location.reload(); });

      });
  }


}
