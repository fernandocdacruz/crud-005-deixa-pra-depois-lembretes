import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { PostIt } from '../models/post-it.model';

@Injectable({ providedIn: 'root' })
export class PostItService {

  private http = inject(HttpClient);
  private readonly API = API_CONFIG.BASE_URL;

  listarTodosPostIts(): Observable<PostIt[]> {
    return this.http.get<PostIt[]>(this.API);
  }

  buscarPorId(id: number): Observable<PostIt> {
    return this.http.get<PostIt>(`${this.API}/${id}`);
  }

  criarPostIt(postIt: PostIt): Observable<PostIt> {
    return this.http.post<PostIt>(this.API, postIt);
  }

  atualizarPostIt(id: number, postIt: PostIt): Observable<PostIt> {
    return this.http.put<PostIt>(`${this.API}/${id}`, postIt);
  }

  excluirPostIt(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}


