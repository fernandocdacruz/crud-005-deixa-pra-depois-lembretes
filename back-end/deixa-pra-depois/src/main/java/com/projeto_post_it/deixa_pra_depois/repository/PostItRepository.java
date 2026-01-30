package com.projeto_post_it.deixa_pra_depois.repository;

import com.projeto_post_it.deixa_pra_depois.model.PostIt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostItRepository extends JpaRepository<PostIt, Long> {
}
