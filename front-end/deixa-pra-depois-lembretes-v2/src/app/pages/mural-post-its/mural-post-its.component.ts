import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostItService } from '../../core/services/post-it.service';
import { PostIt } from '../../core/models/post-it.model';

@Component({
  selector: 'app-mural-post-its',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mural-post-its.component.html',
  styleUrl: './mural-post-its.component.css'
})
export class MuralPostItsComponent implements OnInit {

  post_its: PostIt[] = [];
  private service = inject(PostItService);

  ngOnInit(): void {
    this.service.listarTodosPostIts().subscribe(dados => this.post_its = dados);
  }

  excluir(id: number): void {
    if (!confirm('Deseja excluir este lembrete?')) return;

    this.service.excluirPostIt(id).subscribe(() => {
      this.post_its = this.post_its.filter(p => p.id !== id);
    });
  }
}



