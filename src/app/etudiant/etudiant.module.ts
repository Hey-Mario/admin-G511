import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { NoteComponent } from './note/note.component';
import { ClassificationComponent } from './classification/classification.component';
import { ProfileEtudiantComponent } from './profile-etudiant/profile-etudiant.component';
import { EtudiantRouting } from './etudiant.routing';



@NgModule({
  declarations: [
    ListEtudiantComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    NoteComponent,
    ClassificationComponent,
    ProfileEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRouting
  ]
})
export class EtudiantModule { }
