import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditKepernyokRoutingModule } from './audit-kepernyok-routing.module';
import { AuditKepernyokComponent } from './audit-kepernyok.component';

@NgModule({
  declarations: [AuditKepernyokComponent],
  imports: [
    CommonModule,
    AuditKepernyokRoutingModule
  ]
})
export class AuditKepernyokModule { }
