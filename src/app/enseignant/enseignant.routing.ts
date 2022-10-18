import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { AddEnseignantComponent } from "./add-enseignant/add-enseignant.component";
import { ListAttestationComponent } from "./list-attestation/list-attestation.component";
import { ListEnseignantComponent } from "./list-enseignant/list-enseignant.component";
import { ListFactureComponent } from "./list-facture/list-facture.component";
import { ProfileEnseignantComponent } from "./profile-enseignant/profile-enseignant.component";
import { UpdateEnseignantComponent } from "./update-enseignant/update-enseignant.component";

const routes : Routes = [
  { path: '', component: ListEnseignantComponent},
  { path: 'add', component: AddEnseignantComponent},
  { path: ':id', component: ProfileEnseignantComponent},
  { path: ':id/attestation', component: ListAttestationComponent},
  { path: ':id/facture', component: ListFactureComponent},
  { path: ':id/update', component: UpdateEnseignantComponent},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class EnseignantRouting{}
