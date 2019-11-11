import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelybiztositasiTervekRoutingModule } from './helybiztositasi-tervek-routing.module';
import { HelybiztositasiTervekComponent } from './helybiztositasi-tervek.component';

@NgModule({
  declarations: [HelybiztositasiTervekComponent],
  imports: [
    CommonModule,
    HelybiztositasiTervekRoutingModule
  ]
})
export class HelybiztositasiTervekModule { }
