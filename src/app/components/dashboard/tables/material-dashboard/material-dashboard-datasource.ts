import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { IssueModel } from '../../../../models/IssueModel';

/**
 * Data source for the MaterialDashboard view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MaterialDashboardDataSource extends DataSource<IssueModel> {
  issues: IssueModel[] = [];

  constructor(private paginator: MatPaginator, private sort: MatSort, private data : IssueModel[]) {
    super();
    this.issues = data;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<IssueModel[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.issues),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.issues.length;
    let listOfIssues = merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.issues]));
    }));
    return listOfIssues;
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IssueModel[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IssueModel[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'description': return compare(a.description, b.description, isAsc);
        case 'category': return compare(a.category, b.category, isAsc);
        case 'resource': return compare(a.resource, b.resource, isAsc);
        case 'severity': return compareSeverity(a.severity, b.severity, isAsc);        
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//a simple compare function to sort from issues from high to low seveirty (and other way round)
function compareSeverity(a,b,isAsc){
  let comparator = ['LOW','MEDIUM','HIGH'];
  return (comparator.indexOf(a) > comparator.indexOf(b) ? -1 : 1) * (isAsc ? 1 : -1);
  
}