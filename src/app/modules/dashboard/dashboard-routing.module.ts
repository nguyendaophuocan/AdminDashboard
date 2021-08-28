import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermissionGuard } from "src/app/guard/permission.guard";
import { DeactivateGuard } from "src/app/guard/deactivate-guard.service";
import { Permission } from "src/app/app.constant";
import { DashboardComponent } from "./components/view-dashboard-list/dashboard.component";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        canActivate: [PermissionGuard],
        // data: { role: Permission.admin },
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeactivateGuard],
})
export class DashboardRoutingModule {}
