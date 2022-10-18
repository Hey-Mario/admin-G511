import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSalleComponent } from './list-salle/list-salle.component';
import { SalleRouting } from './salle.routing';



@NgModule({
  declarations: [
    ListSalleComponent
  ],
  imports: [
    CommonModule,
    SalleRouting
  ]
})
export class SalleModule { }
