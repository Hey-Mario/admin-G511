import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { AddModuleComponent } from "./add-module/add-module.component";
import { ListModuleComponent } from "./list-module/list-module.component";
import { UpdateModuleComponent } from "./update-module/update-module.component";

const routes : Routes = [
  { path: '', component: ListModuleComponent},
  { path: 'add', component: AddModuleComponent},
  { path: ':id', component: AddModuleComponent},
  { path: ':id/update', component: UpdateModuleComponent},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class ModuleRouting{}
