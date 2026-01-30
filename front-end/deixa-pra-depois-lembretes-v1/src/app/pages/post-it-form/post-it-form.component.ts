import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { PostItService } from '../../core/services/post-it.service';

@Component({
  standalone: true,
  selector: 'app-post-it-form',
  imports: [
    ReactiveFormsModule,
    ...MATERIAL_IMPORTS
  ],
  templateUrl: './post-it-form.component.html'
})
export class PostItFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private service = inject(PostItService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly form = this.fb.nonNullable.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descricao: ['', [Validators.required]]
  });

  postId?: number;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.postId = Number(idParam);

      this.service.buscarPorId(this.postId).subscribe(post => {
        this.form.patchValue({
          titulo: post.titulo,
          descricao: post.descricao
        });
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) return;

    const dto = this.form.getRawValue();

    const request$ = this.postId
      ? this.service.atualizar({ id: this.postId, ...dto })
      : this.service.criar(dto);

    request$.subscribe(() => {
      this.router.navigate(['/post-its']);
    });
  }
}

