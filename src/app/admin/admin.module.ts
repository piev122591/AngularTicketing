import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsDiscoveredComponent } from './savings-discovered/savings-discovered.component';
import { AddSavingsDiscoveredComponent } from './savings-discovered/add-savings-discovered/add-savings-discovered.component';
import { ProfileComponent } from './profile/profile.component';
import { ItServiceBoardComponent } from './it-service-board/it-service-board.component';
import { ServiceBoardItemComponent } from './it-service-board/service-board-item/service-board-item.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, SavingsDiscoveredComponent, AddSavingsDiscoveredComponent, ProfileComponent, ItServiceBoardComponent, ServiceBoardItemComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
