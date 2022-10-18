import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/core/models/etudiants';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  link = 'http://localhost:3000/etudiants'
  constructor(
    private http:HttpClient
  ) { }

  getAllEtudiant(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.link);
  }
}
