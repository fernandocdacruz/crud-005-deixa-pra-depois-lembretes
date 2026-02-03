import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostItService } from '../../core/services/post-it.service';
import { PostIt } from '../../core/models/post-it.model';

@Component({
  selector: 'app-novo-post-it',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './novo-post-it.component.html',
  styleUrl: './novo-post-it.component.css'
})
export class NovoPostItComponent implements OnInit {

  post_it: PostIt = { titulo: '', descricao: '' };
  editando = false;

  private service = inject(PostItService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.service.buscarPorId(+id).subscribe(p => this.post_it = p);
    }
  }

  salvar(): void {
    const acao = this.editando && this.post_it.id
      ? this.service.atualizarPostIt(this.post_it.id, this.post_it)
      : this.service.criarPostIt(this.post_it);

    acao.subscribe(() => this.router.navigate(['/post-its']));
  }
}



