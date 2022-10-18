import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { NoteComponent } from './note/note.component';
import { ClassificationComponent } from './classification/classification.component';
import { ProfileEtudiantComponent } from './profile-etudiant/profile-etudiant.component';
import { EtudiantRouting } from './etudiant.routing';
import { CoreModule } from '../core/core.module';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import {MatTableModule} from '@angular/material/table';
import { ExempleTableComponent } from './exemple-table/exemple-table.component'
@NgModule({
  declarations: [
    ListEtudiantComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    NoteComponent,
    ClassificationComponent,
    ProfileEtudiantComponent,
    ExempleTableComponent
  ],
  imports: [
    CommonModule,
    EtudiantRouting,
    CoreModule,
    MatTableModule
  ],
  schemas:[
    // NO_ERRORS_SCHEMA,
  ]
})
export class EtudiantModule { }
