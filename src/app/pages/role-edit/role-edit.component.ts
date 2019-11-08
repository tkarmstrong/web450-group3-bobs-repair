/*
; =======================================================
; Title:  role-edit.component.ts (Week 7)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date:   06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  role: any;
  roleId: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.roleId = this.route.snapshot.paramMap.get('id');
    console.log('roleId is ' + this.roleId);

    this.http.get('/api/roles/' + this.roleId).subscribe(res => {
      console.log('The roleId in the GET request is ' + this.roleId);
      this.role = res;
      console.log('This role is ' + JSON.stringify(this.role));
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls['roleTitle'].setValue(this.role.roleTitle);
    })
  }

  ngOnInit() {
    this.form = this.fb.group({
      roleTitle: [null, Validators.compose([Validators.required])],
    })
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
