import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HighchartsChartModule } from "highcharts-angular";
import { DefaultComponent } from "./layouts/default/default.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatSidenavModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
} from "@angular/material";
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DefaultComponent,
  ],
})
export class SharedModule {}
