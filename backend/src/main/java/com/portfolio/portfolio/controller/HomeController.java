package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.Services.PostServices;
import com.portfolio.portfolio.Services.UserServices;
import com.portfolio.portfolio.model.Posts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    private final PostServices postService;
    private final UserServices userService;

    @Autowired
    public HomeController(PostServices postService, UserServices userService) {
        this.postService = postService;
        this.userService = userService;
    }



}
