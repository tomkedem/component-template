import { Component } from '@angular/core';
import { HeaderComponent } from "./dashboard/header/header.component";

import { TraficComponent } from "./dashboard/trafic/trafic.component";

import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { TicketsComponent } from './dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, TraficComponent, TicketsComponent, ServerStatusComponent, DashboardItemComponent],
})
export class AppComponent {
  
  
}
