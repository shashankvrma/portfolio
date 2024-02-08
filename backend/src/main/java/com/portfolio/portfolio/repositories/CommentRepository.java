package com.portfolio.portfolio.repositories;

import com.portfolio.portfolio.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comments, Long> {
}
