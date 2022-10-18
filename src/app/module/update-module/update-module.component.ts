import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Module } from 'src/app/core/models/module';
import { Ue } from 'src/app/core/models/ue';
import { ModuleService } from '../Services/module.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.scss']
})
export class UpdateModuleComponent implements OnInit {

  ues!: Ue[];
  subscription1!: Subscription;
  subscription2!: Subscription;
  module!: Module;
  idModule!: number;
  constructor(
    private moduleService: ModuleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  updateForm = new FormGroup({
    code : new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    volumeHoraire : new FormControl(0,Validators.compose([Validators.required, Validators.min(0)])),
    credit : new FormControl(0, Validators.compose([Validators.required, Validators.min(0)])),
    ue_id : new FormControl(0, Validators.required),
  })
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.idModule = params['id']
      }
    )
    this.subscription1 = this.moduleService.getModule(this.idModule).subscribe(
      module => {
        this.module = module
        // this.updateForm.value.code = module.code
        // this.updateForm.value.nom = module.nom
        // this.updateForm.value.volumeHoraire = module.volumeHoraire
        // this.updateForm.value.credit = module.credit
        // this.updateForm.value.ue_id = module.ue_id
        this.updateForm.setValue({
          code : module.code,
        nom : module.nom,
        volumeHoraire : module.volumeHoraire,
        credit : module.credit,
        ue_id : module.ue_id
        })
        console.log(this.updateForm.value.code)
      }
    )

    this.subscription2 = this.moduleService.getAllUe().subscribe(
      res => this.ues = res
    )
  }

  valider(){
    const link = ['/module']
    console.log(this.updateForm.value)
    this.moduleService.modifier(this.idModule ,this.updateForm.value).subscribe(
      (res) => console.log(res)
    )
    this.router.navigate(link)
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
