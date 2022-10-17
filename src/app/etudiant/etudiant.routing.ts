import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { AddEtudiantComponent } from "./add-etudiant/add-etudiant.component";
import { ClassificationComponent } from "./classification/classification.component";
import { ListEtudiantComponent } from "./list-etudiant/list-etudiant.component";
import { ProfileEtudiantComponent } from "./profile-etudiant/profile-etudiant.component";
import { UpdateEtudiantComponent } from "./update-etudiant/update-etudiant.component";

const routes : Routes = [
  { path: '', component: ListEtudiantComponent},
  { path: 'add', component: AddEtudiantComponent},
  { path: 'classification', component: ClassificationComponent},
  { path: ':id', component: ProfileEtudiantComponent},
  { path: ':id/update', component: UpdateEtudiantComponent},
  { path: ':id/notes', component: UpdateEtudiantComponent},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class EtudiantRouting{}
