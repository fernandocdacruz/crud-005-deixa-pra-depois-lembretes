import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { PostItResponseDTO } from '../dto/post-it-response.dto';
import { PostItCreateDTO } from '../dto/post-it-create.dto';
import { PostItUpdateDTO } from '../dto/post-it-update.dto';

@Injectable({
  providedIn: 'root'
})
export class PostItService {

  private http = inject(HttpClient);
  private readonly baseUrl = `${API_CONFIG.baseUrl}/post-its`;

  listar() {
    return this.http.get<PostItResponseDTO[]>(this.baseUrl);
  }

  buscarPorId(id: number) {
    return this.http.get<PostItResponseDTO>(`${this.baseUrl}/${id}`);
  }

  criar(dto: PostItCreateDTO) {
    return this.http.post<PostItResponseDTO>(this.baseUrl, dto);
  }

  atualizar(dto: PostItUpdateDTO) {
    return this.http.put<PostItResponseDTO>(`${this.baseUrl}/${dto.id}`, dto);
  }

  excluir(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
