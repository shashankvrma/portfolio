package com.portfolio.portfolio.Filter;

import com.portfolio.portfolio.Utils.JwtUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;

@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {

    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var JWTTokenOptional = getTokenFromRequest(request);

        JWTTokenOptional.ifPresent(jwtToken->{
            if(JwtUtils.validate(jwtToken)){
                var usernameOptional = JwtUtils.getUsernameFromToken(jwtToken);

                usernameOptional.ifPresent(username -> {
                    var userDetails = userDetailsService.loadUserByUsername((String) username);

                    //create authentication token
                    var authToken = new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());

                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(authToken);
                });


                
            }
        }
        );
    }

    private Optional<String> getTokenFromRequest(HttpServletRequest request){
        var authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        //Check Token
        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){
            return Optional.of(authHeader.substring(7));
        }
        return Optional.empty();
    }
}
