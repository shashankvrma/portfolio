package com.portfolio.portfolio.Services;

import com.portfolio.portfolio.model.Posts;
import com.portfolio.portfolio.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServices {

    private final PostRepository postRepository;

    @Autowired
    public PostServices(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Posts findById(Long id) {
        Optional<Posts> optionalPost = postRepository.findById(id);
        return optionalPost.orElse(null);
    }

    public List<Posts> findAll() {
        return postRepository.findAll();
    }

    public Posts save(Posts post) {
        return postRepository.save(post);
    }

    public void deleteById(Long id) {
        postRepository.deleteById(id);
    }
}
