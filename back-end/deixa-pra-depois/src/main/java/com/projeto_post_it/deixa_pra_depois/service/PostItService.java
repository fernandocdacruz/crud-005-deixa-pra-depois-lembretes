package com.projeto_post_it.deixa_pra_depois.service;

import com.projeto_post_it.deixa_pra_depois.dto.request.PostItRequestDTO;
import com.projeto_post_it.deixa_pra_depois.dto.response.PostItResponseDTO;
import com.projeto_post_it.deixa_pra_depois.dto.update.PostItUpdateDTO;
import com.projeto_post_it.deixa_pra_depois.exception.RegraNegocioException;
import com.projeto_post_it.deixa_pra_depois.mapper.PostItMapper;
import com.projeto_post_it.deixa_pra_depois.model.PostIt;
import com.projeto_post_it.deixa_pra_depois.repository.PostItRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostItService {

    private final PostItMapper mapper;
    private final PostItRepository repository;

    public PostItResponseDTO criarPostIt(PostItRequestDTO dto) {
        PostIt postIt = repository.save(mapper.toEntity(dto));
        return mapper.toResponseDto(postIt);
    }

    public List<PostItResponseDTO> listarTodosPostIts() {
        return repository.findAll().stream()
                .map(mapper::toResponseDto)
                .toList();
    }

    @Transactional
    public PostItResponseDTO atualizarPostIt(Long id, PostItUpdateDTO dto) {
        PostIt postIt = repository.findById(id)
                .orElseThrow(() -> new RegraNegocioException("Post it não encontrado."));
        mapper.updateEntityFromDto(dto, postIt);
        PostIt salvo = repository.save(postIt);
        return mapper.toResponseDto(salvo);
    }

    @Transactional
    public void excluirPostIt(Long id) {
        if (!repository.existsById(id)) {
            throw new RegraNegocioException("Post it não encontrado.");
        }

        repository.deleteById(id);

    }

}
