import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./dashboard/dashboard.module').then(module => module.DashboardModule)},
  {path:'enseignant', loadChildren:()=>import('./enseignant/enseignant.module').then(module => module.EnseignantModule)},
  {path:'etudiant', loadChildren:()=>import('./etudiant/etudiant.module').then(module => module.EtudiantModule)},
  {path:'salle', loadChildren:()=>import('./salle/salle.module').then(module => module.SalleModule)},
  // {path:'module', loadChildren:()=>import('./module/module.module').then(module => module.ModuleModule)},
  {path:'**', loadChildren:()=>import('./shared/shared.module').then(module => module.SharedModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
