import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from "./components/view-dashboard-list/dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
} from "@angular/material";
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
