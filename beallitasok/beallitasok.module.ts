import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeallitasokRoutingModule } from './beallitasok-routing.module';
import { BeallitasokComponent } from './beallitasok.component';

@NgModule({
  declarations: [BeallitasokComponent],
  imports: [
    CommonModule,
    BeallitasokRoutingModule
  ]
})
export class BeallitasokModule { }
