package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.Dto.AuthResponseDto;
import com.portfolio.portfolio.Dto.AuthRequestDto;
import com.portfolio.portfolio.Dto.AuthStatus;
import com.portfolio.portfolio.Services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody AuthRequestDto authrequestDto){
        var jwtToken = authService.login(authrequestDto.username(), authrequestDto.password());
        var authResponse  = new AuthResponseDto(jwtToken, AuthStatus.LOGIN_SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).body(authResponse);
    }

    @PostMapping("sign-up")
    public ResponseEntity<AuthResponseDto> signup(@RequestBody AuthRequestDto authrequestDto){
        AuthResponseDto authResponse = null;
        try {
            var jwtToken = authService.signup(authrequestDto.name(), authrequestDto.username(), authrequestDto.password());
            authResponse = new AuthResponseDto(jwtToken, AuthStatus.USER_CREATED_SUCCESSFULLY);
            return ResponseEntity.status(HttpStatus.OK).body(authResponse);
        } catch (Exception e) {
            authResponse = new AuthResponseDto(null, AuthStatus.USER_CREATION_FAILED);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(authResponse);
        }

    }
}
