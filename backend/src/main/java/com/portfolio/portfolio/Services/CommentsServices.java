package com.portfolio.portfolio.Services;

import com.portfolio.portfolio.model.Comments;
import com.portfolio.portfolio.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentsServices {

    private final CommentRepository commentRepository;

    @Autowired
    public CommentsServices(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comments findById(Long id) {
        Optional<Comments> optionalComment = commentRepository.findById(id);
        return optionalComment.orElse(null);
    }

    public List<Comments> findAll() {
        return commentRepository.findAll();
    }

    public Comments save(Comments comment) {
        return commentRepository.save(comment);
    }

    public void deleteById(Long id) {
        commentRepository.deleteById(id);
    }

}
