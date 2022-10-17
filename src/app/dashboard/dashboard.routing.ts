import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { ReussiteParcoursComponent } from "./reussite-parcours/reussite-parcours.component";
import { SituationCoursComponent } from "./situation-cours/situation-cours.component";
import { TauxReussiteComponent } from "./taux-reussite/taux-reussite.component";

const routes : Routes = [
  { path: '', redirectTo: 'taux_reussite', pathMatch:'full'},
  { path: 'taux_reussite', component: TauxReussiteComponent},
  { path: 'parcours_reussite', component: ReussiteParcoursComponent},
  { path: 'cours', component: SituationCoursComponent},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DahsboardRouting{}
