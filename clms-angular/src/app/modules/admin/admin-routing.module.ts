import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  QuestionBankDashboardComponent
} from "@modules/admin/question-bank/dashboards/question-bank-dashboard/question-bank-dashboard.component";
import {DashboardComponent} from "@modules/admin/pages/dashboard/dashboard.component";
import {UserDashboardComponent} from "@modules/admin/users/dashboards/user-dashboard/user-dashboard.component";
import {QuestionBankComponent} from "@modules/admin/pages/dashboard/question-bank/question-bank.component";
import {UsersComponent} from "@modules/admin/pages/dashboard/users/users.component";

const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'question-bank', component: QuestionBankComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

