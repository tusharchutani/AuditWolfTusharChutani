import { Component, OnChanges,SimpleChanges, OnInit,Input } from '@angular/core';
import * as _ from "lodash";


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnChanges {

  @Input() issues: Object;

  type = "pie"
  data = null;
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor() { }

  //Whenever the data is changed this element is called
  ngOnChanges(changes: SimpleChanges) { 
    if(changes.issues.currentValue != undefined){
      this.data = this.makePieChartData(this.issues);
    }
  }

  //Make the pie chart data based on the risk
  makePieChartData(issues){
    
    let low = _.filter(issues,function(issue){
      return issue.severity == 'LOW';
    }).length;
    let medium = _.filter(issues,function(issue){
      return issue.severity == 'MEDIUM';
    }).length;
    let high = _.filter(issues,function(issue){
      return issue.severity == 'HIGH';
    }).length;

    return {
      labels: ["High risk issue", "Medium risk issue", "Low risk issue"],
      datasets: [{
        backgroundColor: [
          "red",
          "#ff7a00",
          "#d4c829"
        ],
        data: [high, medium, low]
      }]
    };
  }

}
