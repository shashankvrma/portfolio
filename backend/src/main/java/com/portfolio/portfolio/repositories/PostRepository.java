package com.portfolio.portfolio.repositories;

import com.portfolio.portfolio.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Posts, Long> {
}
