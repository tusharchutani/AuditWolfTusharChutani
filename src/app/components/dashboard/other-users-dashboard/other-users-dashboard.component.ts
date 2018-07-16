import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-other-users-dashboard',
  templateUrl: './other-users-dashboard.component.html',
  styleUrls: ['./other-users-dashboard.component.scss']
})

export class OtherUsersDashboardComponent implements OnInit {

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
