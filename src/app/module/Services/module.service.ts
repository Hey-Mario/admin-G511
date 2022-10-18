import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from 'src/app/core/models/module';
import { Ue } from 'src/app/core/models/ue';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {


  constructor(
    private http: HttpClient
  ) { }
  getAllModule(): Observable<Module[]>{
    return this.http.get<Module[]>(`${environment.apiUrl}modules`)
  }

  getAllUe(): Observable<Ue[]>{
    return this.http.get<Ue[]>(`${environment.apiUrl}ues`)
  }

  ajouter(data: any){
    return this.http.post(`${environment.apiUrl}modules`, data);
  }
}
