package com.portfolio.portfolio.Services;

import com.portfolio.portfolio.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.portfolio.model.Category;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServices {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryServices(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category findById(Long id) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        return optionalCategory.orElse(null);
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }


    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }
}
