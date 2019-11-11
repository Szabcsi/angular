import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelykeszletKarbantartasRoutingModule } from './helykeszlet-karbantartas-routing.module';
import { HelykeszletKarbantartasComponent } from './helykeszlet-karbantartas.component';

@NgModule({
  declarations: [HelykeszletKarbantartasComponent],
  imports: [
    CommonModule,
    HelykeszletKarbantartasRoutingModule
  ]
})
export class HelykeszletKarbantartasModule { }
