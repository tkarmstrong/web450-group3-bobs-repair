/*
; =======================================================
; Title: role-configuration.component.ts (Week 7)
; Authors: [Tyler Armstrong], [David Tarvin], Lea Trueworthy
; Date: 06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RoleDeleteDialogComponent } from './../../shared/role-delete-dialog/role-delete-dialog.component';

@Component({
  selector: 'app-role-configuration',
  templateUrl: './role-configuration.component.html',
  styleUrls: ['./role-configuration.component.css']
})
export class RoleConfigurationComponent implements OnInit {

  displayedColumns: string[] = ['roleTitle', 'actions'];
  role: any;
  roles: any;

  constructor(private http: HttpClient, private router: Router,
              private dialog: MatDialog) {
    this.http.get('/api/roles').subscribe(res => {
      this.roles = res;
      console.log(this.roles);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

  edit(roleId) {
    this.router.navigate(['/session/role-edit/' + roleId]);
  }

  delete(roleId, roleTitle) {
    const dialogRef = this.dialog.open(RoleDeleteDialogComponent, {
      data: {
        roleTitle: roleTitle
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm') {
        this.http.delete('/api/roles/' + roleId).subscribe(res => {
          console.log('Role deleted');
          this.roles = this.roles.filter(r => r._id !== roleId);
        })
      } else if (result === 'cancel') {
        this.router.navigate(['/session/role-configuration']);
      }
    })
  }
}
