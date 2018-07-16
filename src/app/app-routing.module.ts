import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { OtherUsersDashboardComponent } from './components/dashboard/other-users-dashboard/other-users-dashboard.component'

const routes: Routes = [
  {path:'', component:AdminDashboardComponent},
  {path:'admin', component:AdminDashboardComponent},
  {path:'otherUserDashboard', component:OtherUsersDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
