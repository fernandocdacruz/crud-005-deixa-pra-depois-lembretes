import { Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { RouterModule } from '@angular/router';
import { PostItService } from '../../core/services/post-it.service';
import { Observable } from 'rxjs';
import { PostItResponseDTO } from '../../core/dto/post-it-response.dto';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-mural',
  imports: [ ...MATERIAL_IMPORTS, RouterModule, AsyncPipe ],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.scss'
})
export class MuralComponent {

  private service = inject(PostItService);
  
  postIts$: Observable<PostItResponseDTO[]> = this.service.listar();

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => {
      this.postIts$ = this.service.listar();
    })
  }

}
