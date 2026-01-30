package com.projeto_post_it.deixa_pra_depois.controller;

import com.projeto_post_it.deixa_pra_depois.dto.request.PostItRequestDTO;
import com.projeto_post_it.deixa_pra_depois.dto.response.PostItResponseDTO;
import com.projeto_post_it.deixa_pra_depois.dto.update.PostItUpdateDTO;
import com.projeto_post_it.deixa_pra_depois.service.PostItService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deixa-pra-depois")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class PostItController {

    private final PostItService service;

    @PostMapping
    public ResponseEntity<PostItResponseDTO> criarNovoPostIt(@Valid @RequestBody PostItRequestDTO postItRequestDTO) {
        PostItResponseDTO postItResponseDTO = service.criarPostIt(postItRequestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(postItResponseDTO);
    }

    @GetMapping
    public List<PostItResponseDTO> listarTodosPostIts() {
        return service.listarTodosPostIts();
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostItResponseDTO> atualizarPostIt(@PathVariable Long id, @Valid @RequestBody PostItUpdateDTO postItUpdateDTO) {
        PostItResponseDTO postItResponseDTO = service.atualizarPostIt(id, postItUpdateDTO);
        return ResponseEntity.ok(postItResponseDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirPostIt(@PathVariable Long id) {
        service.excluirPostIt(id);
        return ResponseEntity.noContent().build();
    }

}
