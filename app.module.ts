import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { DemoModule } from './demo/demo.module';
import { AppComponent } from './app.component';
import { BeallitasokModule } from './beallitasok/beallitasok.module';
import { AuditKepernyokModule } from './audit-kepernyok/audit-kepernyok.module';
import { HelybiztositasiTervekModule } from './helybiztositasi-tervek/helybiztositasi-tervek.module';
import { HelykeszletKarbantartasModule } from './helykeszlet-karbantartas/helykeszlet-karbantartas.module';
import { BeallitasokComponent } from './beallitasok/beallitasok.component';


const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'beallitasok', component: BeallitasokComponent },
  { path: 'helykeszlet-karbantartas', loadChildren: './helykeszlet-karbantartas/helykeszlet-karbantartas#HelykeszletKarbantartasModule'},
  { path: 'helybiztositasi-tervek', loadChildren: './helybiztositasi-tervek/helybiztositasi-tervek#HelybiztositasiTervekModule'},
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule,
    BeallitasokModule,
    AuditKepernyokModule,
    HelykeszletKarbantartasModule,
    HelybiztositasiTervekModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
