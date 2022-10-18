import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ue } from 'src/app/core/models/ue';
import { ModuleService } from '../Services/module.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit, OnDestroy {

  ues: Ue[] = [];
  subscription!: Subscription;
  constructor(
    private moduleService: ModuleService
  ) { }

  addForm = new FormGroup({
    code : new FormControl('MATH_220', Validators.required),
    nom : new FormControl('Recherche Operationnelle', Validators.required),
    volumeHoraire : new FormControl(22, Validators.compose([Validators.required, Validators.min(0)])),
    credit : new FormControl(4, Validators.compose([Validators.required, Validators.min(0)])),
    ue_id : new FormControl('', Validators.required),
  })
  ngOnInit(): void {
    this.subscription = this.moduleService.getAllUe().subscribe(
      res => {
        this.ues = res
        console.log(this.ues)
      }
    )
  }

  enregistrer(){
    console.log(this.addForm.value)
    this.moduleService.ajouter(this.addForm.value).subscribe(
      (res) =>  console.log(res)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
