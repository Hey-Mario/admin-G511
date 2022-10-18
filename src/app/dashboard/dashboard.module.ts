import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TauxReussiteComponent } from './taux-reussite/taux-reussite.component';
import { SituationCoursComponent } from './situation-cours/situation-cours.component';
import { ReussiteParcoursComponent } from './reussite-parcours/reussite-parcours.component';
import { DahsboardRouting } from './dashboard.routing';



@NgModule({
  declarations: [
    TauxReussiteComponent,
    SituationCoursComponent,
    ReussiteParcoursComponent
  ],
  imports: [
    CommonModule,
    DahsboardRouting
  ]
})
export class DashboardModule { }
