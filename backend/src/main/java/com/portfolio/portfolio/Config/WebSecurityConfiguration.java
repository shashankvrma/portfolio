package com.portfolio.portfolio.Config;

import com.portfolio.portfolio.Filter.JWTAuthenticationFilter;
import org.apache.catalina.authenticator.SpnegoAuthenticator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration{

    private final AuthenticationEntryPoint authenticationEntryPoint;

    private final JWTAuthenticationFilter jwtAuthenticationFilter;

    public WebSecurityConfiguration(AuthenticationEntryPoint authenticationEntryPoint, JWTAuthenticationFilter jwtAuthenticationFilter) {
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // Disable Cors
        http.cors(AbstractHttpConfigurer::disable);

        // Disable Csrf
        http.csrf(AbstractHttpConfigurer::disable);

        //Authorize Http request
        http.authorizeHttpRequests(
                requestMatcher->requestMatcher.requestMatchers("*/login").permitAll()
                        .requestMatchers("/sign-up").permitAll()
                        .anyRequest().authenticated()
        );

        //Exception handling
        http.exceptionHandling( exceptionConfig->exceptionConfig.authenticationEntryPoint(authenticationEntryPoint));

        //STATE-LESS session
        http.sessionManagement( sessionConfig->sessionConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        //JWT Filter
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
