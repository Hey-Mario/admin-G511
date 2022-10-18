import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Module } from 'src/app/core/models/module';
import { ModuleService } from '../Services/module.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss']
})
export class ListModuleComponent implements OnInit, OnDestroy {

  modules: Module[] = [];
  subscription!: Subscription
  constructor(
    private moduleService: ModuleService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.moduleService.getAllModule().subscribe(
      res => this.modules = res
      )
    }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  supprimer(id: number){
    this.moduleService.supprimer(id).subscribe({
      next: res => console.log(res),
      error: e => console.log(e),
      complete: () => console.log('ok')
  })
  }
}
