import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  isAuthenticated: string;
  username: string;
  form: FormGroup;

  constructor(private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private fb: FormBuilder,
              private cookieService: CookieService) {
    this.isAuthenticated = this.route.snapshot.queryParamMap.get('isAuthenticated');
    this.username = this.route.snapshot.queryParamMap.get('username');
  }

  ngOnInit() {
    this.form = this.fb.group({
      password: [null, [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#%*?&]{8,}$')]]
    });
  }

  resetPassword() {
    this.http.post('/api/users/' + this.username + '/reset-password', {
      password: this.form.controls['password'].value
    }).subscribe(res => {
      this.cookieService.set('isAuthenticated', 'true', 1);
      this.cookieService.set('username', this.username, 1);
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    });
  }
}
