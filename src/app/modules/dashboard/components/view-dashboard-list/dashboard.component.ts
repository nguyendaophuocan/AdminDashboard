import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardService } from "src/app/modules/dashboard/dashboard.service";
import { MatTableDataSource, MatPaginator } from "@angular/material";

export interface PeriodicElement {
  name: string;
  position: number;
  username: string;
  date_created: string
}
const listUsers: PeriodicElement[] = [
  { position: 1, name: "User1", username: "username1", date_created: "01/01/2021" },
  { position: 2, name: "User2", username: "username2", date_created: "01/01/2021"},
  { position: 3, name: "User3", username: "username3", date_created: "01/01/2021" },
  { position: 4, name: "User4", username: "username4", date_created: "01/01/2021" },
  { position: 5, name: "User5", username: "username5", date_created: "01/01/2021" },
];

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ["position", "name", "username", "date_created"];
  dataSource = new MatTableDataSource<PeriodicElement>(listUsers);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }
}
