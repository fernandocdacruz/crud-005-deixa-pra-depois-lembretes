package com.projeto_post_it.deixa_pra_depois.dto.update;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record PostItUpdateDTO(

        @NotBlank(message = "O título é obrigatório.")
        @Size(min = 3, max = 50, message = "O título deve ter entre 3 e 50 caracteres.")
        String titulo,

        @NotBlank(message = "A descrição é obrigatória.")
        @Size(min = 3, max = 300, message = "A descrição deve ter entre 3 e 300 caracteres.")
        String descricao

)
{}
