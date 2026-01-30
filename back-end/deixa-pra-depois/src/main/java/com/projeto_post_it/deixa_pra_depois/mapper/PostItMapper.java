package com.projeto_post_it.deixa_pra_depois.mapper;

import com.projeto_post_it.deixa_pra_depois.dto.request.PostItRequestDTO;
import com.projeto_post_it.deixa_pra_depois.dto.response.PostItResponseDTO;
import com.projeto_post_it.deixa_pra_depois.dto.update.PostItUpdateDTO;
import com.projeto_post_it.deixa_pra_depois.model.PostIt;
import org.springframework.stereotype.Component;

@Component
public class PostItMapper {

    public PostIt toEntity(PostItRequestDTO dto) {
        PostIt postIt = new PostIt();
        postIt.setTitulo(dto.titulo());
        postIt.setDescricao(dto.descricao());
        return postIt;
    }

    public PostItResponseDTO toResponseDto(PostIt postIt) {
        return new PostItResponseDTO(
                postIt.getId(),
                postIt.getTitulo(),
                postIt.getDescricao()
        );
    }

    public void updateEntityFromDto(PostItUpdateDTO dto, PostIt postIt) {
        postIt.setTitulo(dto.titulo());
        postIt.setDescricao(dto.descricao());
    }

}
