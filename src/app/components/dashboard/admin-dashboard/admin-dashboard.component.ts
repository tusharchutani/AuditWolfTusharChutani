import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private data:DataService) { }
  issues:Object;

  ngOnInit() {
      this.data.getListOfIssues().subscribe(
        data =>  {
          this.issues = data
        }
      );
  }

}
