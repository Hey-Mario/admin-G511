import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModuleComponent } from './list-module/list-module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { ModuleRouting } from './module.routing';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListModuleComponent,
    AddModuleComponent,
    UpdateModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRouting,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ModuleModule { }
