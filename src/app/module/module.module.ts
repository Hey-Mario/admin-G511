import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModuleComponent } from './list-module/list-module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { ModuleRouting } from './module.routing';



@NgModule({
  declarations: [
    ListModuleComponent,
    AddModuleComponent,
    UpdateModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRouting,
  ]
})
export class ModuleModule { }
