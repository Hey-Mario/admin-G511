import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { CahierDeTexteComponent } from "./cahier-de-texte/cahier-de-texte.component";

const routes : Routes = [
  { path: '', component: CahierDeTexteComponent}, //tokony iliste ny classe na module rehetra
  { path: ':classe', component: CahierDeTexteComponent}, // mi-affiche an'iny par rapport amin'ilay classe
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CahierTexteRouting{}
