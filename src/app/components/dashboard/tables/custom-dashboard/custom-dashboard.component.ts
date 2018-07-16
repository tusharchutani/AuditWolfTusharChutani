import { Component, OnInit, Input,OnChanges,SimpleChanges,SimpleChange } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { sortData } from '../../../../utility/AuditWolfUtility';


const yellow = "#d4c829";
const orange = "#ff7a00";

@Component({
  selector: 'app-custom-dashboard',
  templateUrl: './custom-dashboard.component.html',
  styleUrls: ['./custom-dashboard.component.scss']
})
export class CustomDashboardComponent implements OnChanges {


  @Input() issues: Object;
  @Input() isAdmin: boolean;
  filteredList: Object;
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.issues.currentValue != undefined){
      this.activeRoute.queryParams.subscribe(params => {
        this.filteredList = sortData(this.issues,params);
        console.log("Filtered list "+this.filteredList);
      });
    }
  }


  //methods to change the colour of the list item based on severity
  severityLeftBorder(servity){
    let color = "grey";
    if(servity == 'HIGH'){
      color="red";
    }else if(servity == 'MEDIUM'){
      color=orange;
    }else if(servity == 'LOW'){
      color=yellow;
    }
    return {
      "border-left": "5px solid "+color
    };
  }
  severityHeading(servity){
    let color = "grey";
    if(servity == 'HIGH'){
      color="red";
    }else if(servity == 'MEDIUM'){
      color=orange;
    }else if(servity == 'LOW'){
      color=yellow;
    }
    return {
      "color": color
    };
  }

  search(issueValue,querryAttribute){
    let currentURL;
    if(this.router.url.indexOf('?') == -1){
      currentURL = this.router.url;
    }else{
      currentURL = this.router.url.substring(0, this.router.url.indexOf('?'));
    }
    let query = new Object();
    query[querryAttribute] = issueValue;
    
    this.router.navigate([currentURL],{
      queryParams: query
    });
  }
}