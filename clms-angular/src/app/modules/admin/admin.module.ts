import {NgModule} from "@angular/core";
import {CommonModule, NgIf} from "@angular/common";
import {AdminRoutingModule} from "@modules/admin/admin-routing.module";
import {CardModule} from "primeng/card";
import {Button, ButtonDirective} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {PaginatorModule} from "primeng/paginator";
import {DialogModule} from "primeng/dialog";
import {TagModule} from "primeng/tag";
import {TableModule} from "primeng/table";
import {SharedModule} from "@shared/shared.module";
import {ChipsModule} from "primeng/chips";
import {AutoCompleteModule} from "primeng/autocomplete";
import {MultiSelectModule} from "primeng/multiselect";
import {AdminQuestionBankModule} from "@modules/admin/question-bank/admin-question-bank.module";
import {SplitterModule} from "primeng/splitter";
import {PanelMenuModule} from "primeng/panelmenu";
import {AdminAuthorizationModule} from "@modules/admin/authorization/admin-authorization.module";
import {ButtonComponent} from "@core/components/button/button.component";
import {AdminUserModule} from "@modules/admin/users/admin-user.module";
import {DashboardComponent} from "@modules/admin/pages/dashboard/dashboard.component";
import {ListboxModule} from "primeng/listbox";
import {MenubarModule} from "primeng/menubar";
import {CoreModule} from "@core/core.module";
import {UsersComponent} from "@modules/admin/pages/dashboard/users/users.component";
import {QuestionBankComponent} from "@modules/admin/pages/dashboard/question-bank/question-bank.component";
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [DashboardComponent, UsersComponent, QuestionBankComponent],
  exports: [DashboardComponent, UsersComponent, QuestionBankComponent],
  imports: [
    AdminUserModule,
    ListboxModule,
    FormsModule,
    AdminQuestionBankModule,
    NgIf,
    RouterOutlet,
    AdminRoutingModule
  ],
  providers: [],
})
export class AdminModule { }
