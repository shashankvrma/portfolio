package com.portfolio.portfolio.repositories;

import com.portfolio.portfolio.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
