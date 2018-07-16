import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule }   from '@angular/forms';
import { MatToolbarModule,MatTabsModule,MatSelectModule, MatOptionModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatDialogModule ,MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDashboardComponent } from './components/dashboard/tables/material-dashboard/material-dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { OtherUsersDashboardComponent } from './components/dashboard/other-users-dashboard/other-users-dashboard.component';
import { CustomDashboardComponent } from './components/dashboard/tables/custom-dashboard/custom-dashboard.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminDashboardComponent,
    MaterialDashboardComponent,
    SearchComponent,
    OtherUsersDashboardComponent,
    CustomDashboardComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[SearchComponent]
})
export class AppModule { }
