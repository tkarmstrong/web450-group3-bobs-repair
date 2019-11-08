/*
; =======================================================
; Title:  role-edit.component.ts (Week 7)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date:   06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  role: any;
  roleId: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private fb: FormBuilder, private router: Router) {
    this.roleId = this.route.snapshot.paramMap.get('id');

    this.http.get('/api/roles/' + this.roleId).subscribe(res => {
      this.role = res;
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls['roleTitle'].setValue(this.role.roleTitle);
    })
  }

  ngOnInit() {
  }

  saveRole() {
    this.http.put('/api/roles/update/' + this.roleId, {
      roleTitle: this.form.controls['roleTitle'].value
    }).subscribe(res => {
      this.router.navigate(['/session/role-configuration'])
    })
  }

  cancel() {
    this.router.navigate(['/session/role-configuration'])
  }
}
