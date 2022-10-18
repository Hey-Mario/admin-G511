import { Component, OnInit, OnDestroy } from '@angular/core';
import { Etudiant } from 'src/app/core/models/etudiants';
// import {MatTableDataSource} from '@angular/material';
import { FormBuilder,AbstractControl } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit,OnDestroy {

  subscription!: Subscription
  etudiants: Etudiant[] = []

  constructor(
    private etudiantService: EtudiantService
  ){}

  // displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'date de naissance', 'numero', 'adresse'];
  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: Etudiant) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Etudiant) => `${element.nom}`,
    },
    {
      columnDef: 'prenom',
      header: 'prenom',
      cell: (element: Etudiant) => `${element.prenom}`,
    },
    {
      columnDef: 'email',
      header: 'email',
      cell: (element: Etudiant) => `${element.email}`,
    },
  ];
  dataSource!: MatTableDataSource<Etudiant>;
  displayedColumns = this.columns.map(c => c.columnDef);

  ngOnInit(): void {
    this.subscription = this.etudiantService.getAllEtudiant().subscribe(
      res => {
        this.etudiants = res
        this.dataSource = new MatTableDataSource(this.etudiants)
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
