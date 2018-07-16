import { Component, ViewChild,Input,OnChanges,SimpleChanges  } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MaterialDashboardDataSource } from './material-dashboard-datasource';
import { ActivatedRoute } from '@angular/router';
import { sortData } from '../../../../utility/AuditWolfUtility';
import { IssueModel } from '../../../../models/IssueModel';
//TODO: in the future these variables can be extracted
const yellow = "#d4c829";
const orange = "#ff7a00";

@Component({
  selector: 'material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css']
})

export class MaterialDashboardComponent implements OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MaterialDashboardDataSource;
  @Input() isAdmin: boolean;
  @Input() issues: IssueModel[];
  filteredList: IssueModel[];
  constructor(private route: ActivatedRoute){

  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [];

  ngOnInit() {
    this.displayedColumns = this.isAdmin ? ['category', 'description','severity','resource','group'] : ['description','severity'];
  }

  //whenever the array object changes we have to call this because we have to pre process the array
  ngOnChanges(changes: SimpleChanges) {
    if(changes.issues.currentValue != undefined){
      this.route.queryParams.subscribe(params => {
        console.dir("Params "+params);
        this.filteredList = sortData(this.issues,params);
        this.dataSource = new MaterialDashboardDataSource(this.paginator, this.sort, this.filteredList);
    });
    }
  }
  severityColor(servity){
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

}
