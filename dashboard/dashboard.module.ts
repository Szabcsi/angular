import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAppComponent } from './dashboard-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { BeallitasokModule } from '../beallitasok/beallitasok.module';
import { AuditKepernyokModule } from '../audit-kepernyok/audit-kepernyok.module';
import { HelykeszletKarbantartasModule } from '../helykeszlet-karbantartas/helykeszlet-karbantartas.module';
import { HelybiztositasiTervekModule } from '../helybiztositasi-tervek/helybiztositasi-tervek.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BeallitasokComponent } from "src/app/beallitasok/beallitasok.component";
import { AuditKepernyokComponent } from "src/app/audit-kepernyok/audit-kepernyok.component";
import { HelykeszletKarbantartasComponent } from "src/app/helykeszlet-karbantartas/helykeszlet-karbantartas.component";
import { HelybiztositasiTervekComponent } from "src/app/helybiztositasi-tervek/helybiztositasi-tervek.component";

const routes: Routes = [
  { path: '', component: DashboardAppComponent,
    children: [ 
      { path: 'beallitasok', component: BeallitasokComponent }, 
      { path: 'audit-kepernyok', component: AuditKepernyokComponent }, 
      { path: 'helykeszlet-karbantartas', component: HelykeszletKarbantartasComponent }, 
      { path: 'helybiztositasi-tervek', component: HelybiztositasiTervekComponent } 
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [DashboardAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BeallitasokModule,
    AuditKepernyokModule,
    HelykeszletKarbantartasModule,
    HelybiztositasiTervekModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
