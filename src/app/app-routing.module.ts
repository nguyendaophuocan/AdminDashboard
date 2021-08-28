import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutePath } from "./app.constant";
import { DefaultComponent } from "./shared/layouts/default/default.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./modules/dashboard/components/view-dashboard-list/dashboard.component";
import { UsersComponent } from "./modules/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
    ],
  },
  { path: RoutePath.login, component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
