import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Subtema } from '../model/Subtema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubtemasService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllSubtemas(): Observable<Subtema[]> {
    return this.http.get<Subtema[]>('https://degotaemgota.herokuapp.com/subtemas', this.token)

  }

  getByIdSubtema(id: number): Observable<Subtema> {
    return this.http.get<Subtema>(`https://degotaemgota.herokuapp.com/subtemas/${id}`, this.token)
  }

  getByDescricao(descricao: string): Observable<Subtema[]>{
    return this.http.get<Subtema[]>(`https://degotaemgota.herokuapp.com/subtemas/${descricao}`, this.token)
  }

  postSubtema(subtema: Subtema): Observable<Subtema> {
    return this.http.post<Subtema>('https://degotaemgota.herokuapp.com/subtemas', subtema, this.token)

  }

  putSubtema(subtema: Subtema): Observable<Subtema> {
    return this.http.put<Subtema>('https://degotaemgota.herokuapp.com/subtemas', subtema, this.token)
  }

  deleteSubtema(id: number) {
    return this.http.delete(`https://degotaemgota.herokuapp.com/subtemas/${id}`, this.token)
  }




}

