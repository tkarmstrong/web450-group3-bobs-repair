/*
; =======================================================
; Title: role-add.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date: 08 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {

  addRoleForm: FormGroup;
  role: string;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.addRoleForm = new FormGroup({
      role: new FormControl('', [Validators.required])
    })
  }

  addRole() {
    const roleTitle = this.addRoleForm.get('role').value;

    const newRole = { roleTitle };
    console.log(newRole);

    this.http.post('/api/roles', newRole).subscribe(res => {
      if (res) {
        console.log('Role ' + roleTitle + ' added to list');
        this.router.navigate(['/session/role-configuration']);
      } else {
        console.log('Something went wrong');
      }
    })
  }

  cancel() {
    this.router.navigate(['/session/role-configuration']);
  }

}
