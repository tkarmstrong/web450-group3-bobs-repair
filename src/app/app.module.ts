
/*
; =======================================================
; Title: app.module.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Other
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './shared/guards/auth-guard.service';

// Components
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SessionLayoutComponent } from './shared/session-layout/session-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SecurityQuestionsComponent } from './pages/security-questions/security-questions.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { QuestionEditDialogComponent } from './shared/question-edit-dialog/question-edit-dialog.component';
import { UserDeleteDialogComponent } from './shared/user-delete-dialog/user-delete-dialog.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionAddDialogComponent } from './shared/question-add-dialog/question-add-dialog.component';
import { QuestionDeleteDialogComponent } from './shared/question-delete-dialog/question-delete-dialog.component';

// PrimeNg


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HomeComponent,
    SessionLayoutComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    SecurityQuestionsComponent,
    UserManagementComponent,
    UserDetailsComponent,
    UserDeleteDialogComponent,
    QuestionEditDialogComponent,
    QuestionAddDialogComponent,
    QuestionDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {useHash: true, enableTracing: false}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [CookieService, AuthGuardService],
  bootstrap: [AppComponent],
<<<<<<< HEAD
  entryComponents: [UserDeleteDialogComponent, QuestionEditDialogComponent]
=======
  entryComponents: [UserDeleteDialogComponent,
                    QuestionDeleteDialogComponent]
>>>>>>> d80cda5400e1bace49fb75b3548558675bc6baee
})
export class AppModule { }
