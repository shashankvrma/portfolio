package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.Services.PostServices;
import com.portfolio.portfolio.model.Posts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    private PostServices postServices;

    @GetMapping("/posts")
    public List<Posts> getAllPosts() {
        return postServices.findAll();
    }

    @PostMapping
    public ResponseEntity<Posts> createPost(@RequestBody Posts post) {
        Posts newPost = new Posts();
        newPost.setTitle(post.getTitle());
        newPost.setContent(post.getContent());
        Posts savedPost = postServices.save(newPost);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }

    @GetMapping("post/{post_id}")
    public Posts getPost(@PathVariable long post_id){
        return postServices.findById(post_id);
    }

}
