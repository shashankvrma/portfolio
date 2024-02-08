package com.portfolio.portfolio.Services.Impl;

import com.portfolio.portfolio.Services.AuthService;
import com.portfolio.portfolio.Utils.JwtUtils;
import com.portfolio.portfolio.model.User;
import com.portfolio.portfolio.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;
    @Override
    public String login(String username, String password) {
        var userToken = new UsernamePasswordAuthenticationToken(username,password);
        var authenticate = authenticationManager.authenticate(userToken);
        var username_for_token = ((UserDetails)(authenticate.getPrincipal())).getUsername();
        return JwtUtils.generateToken(username);
    }

    @Override
    public String signup(String name, String username, String password) {
        if(userRepository.existsByUsername(username)) {
            throw new RuntimeException("User already exists");
        }

        var EncodedPassword = passwordEncoder.encode(password);

//        var authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        var created_user = User.builder()
                .username(username)
                .password(EncodedPassword)
                .FullName(name)
                .build();

        userRepository.save(created_user);

        return JwtUtils.generateToken(username);

    }
}
