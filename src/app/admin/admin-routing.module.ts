import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsDiscoveredComponent } from './savings-discovered/savings-discovered.component';
import { AddSavingsDiscoveredComponent } from './savings-discovered/add-savings-discovered/add-savings-discovered.component';
import { ProfileComponent } from './profile/profile.component';
import { SavingsDiscoveredInfoResolver } from 'src/app/core/resolvers/savings-discovered-info.resolver';
import { ItServiceBoardComponent } from './it-service-board/it-service-board.component';
import { ServiceBoardItemComponent } from './it-service-board/service-board-item/service-board-item.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'savings-discovered',
        component: SavingsDiscoveredComponent,
      },
      {
        path: 'savings-discovered/:id/edit',
        component: AddSavingsDiscoveredComponent,
        resolve: { savingsDiscovered: SavingsDiscoveredInfoResolver },
      },
      {
        path: 'savings-discovered/add',
        component: AddSavingsDiscoveredComponent,
      },
      {
        path: 'it-service-board',
        component: ItServiceBoardComponent,
      },
      {
        path: 'it-service-board/add',
        component: ServiceBoardItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
