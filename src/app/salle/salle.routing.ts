import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { ListSalleComponent } from "./list-salle/list-salle.component";

const routes : Routes = [
  { path: '', component: ListSalleComponent},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class SalleRouting{}
