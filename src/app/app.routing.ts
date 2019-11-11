import { QuestionAddComponent } from './pages/question-add/question-add.component';
import { RoleAddComponent } from './pages/role-add/role-add.component';
import { RoleEditComponent } from './pages/role-edit/role-edit.component';
import { RoleConfigurationComponent } from './pages/role-configuration/role-configuration.component';
/*
; =======================================================
; Title: app.routing.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Routes } from '@angular/router';
import { BaseLayoutComponent, SessionLayoutComponent } from './shared';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SecurityQuestionsComponent } from './pages/security-questions/security-questions.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VerifySecurityQuestionsFormComponent } from './verify-security-questions-form/verify-security-questions-form.component';
import { VerifyUsernameFormComponent } from './verify-username-form/verify-username-form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { ServiceRepairComponent } from './pages/service-repair/service-repair.component';


export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'server-error', component: ServerErrorComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'forgot-password', component: VerifyUsernameFormComponent },
      { path: 'verify-security-questions', component: VerifySecurityQuestionsFormComponent},
      { path: 'forgot-password/:username', component: VerifySecurityQuestionsFormComponent},
      { path: 'reset-password', component: ResetPasswordFormComponent},
      { path: 'about-us', component: AboutUsComponent },

    ]
  },
  { path: 'session', component: SessionLayoutComponent,
    children: [
      { path: 'security-questions', component: SecurityQuestionsComponent, canActivate: [AuthGuardService] },
      { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuardService] },
      { path: 'user-details/:id', component: UserDetailsComponent, canActivate: [AuthGuardService]},
      { path: '404', component: NotFoundComponent },
      { path: 'service-repair', component: ServiceRepairComponent },
      { path: 'role-configuration', component: RoleConfigurationComponent, canActivate: [AuthGuardService]},
      { path: 'role-edit/:id', component: RoleEditComponent, canActivate: [AuthGuardService]},
      { path: 'role-add', component: RoleAddComponent, canActivate: [AuthGuardService]},
      { path: 'question-add', component: QuestionAddComponent, canActivate: [AuthGuardService]},
      { path: '404', component: NotFoundComponent }
    ]
  },
  { path: '**', redirectTo: 'session/404' }
];
