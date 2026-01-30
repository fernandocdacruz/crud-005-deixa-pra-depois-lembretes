package com.projeto_post_it.deixa_pra_depois.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "lembrentes_criados")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostIt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String titulo;

    @Column
    private String descricao;

}
