import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { ListAttestationComponent } from './list-attestation/list-attestation.component';
import { ProfileEnseignantComponent } from './profile-enseignant/profile-enseignant.component';
import { EnseignantRouting } from './enseignant.routing';



@NgModule({
  declarations: [
    UpdateEnseignantComponent,
    AddEnseignantComponent,
    ListEnseignantComponent,
    ListFactureComponent,
    ListAttestationComponent,
    ProfileEnseignantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRouting
  ]
})
export class EnseignantModule { }
