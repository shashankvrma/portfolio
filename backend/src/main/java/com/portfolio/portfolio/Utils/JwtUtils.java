package com.portfolio.portfolio.Utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.time.DateUtils;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Slf4j
public class JwtUtils {

    private static final String ISSUER = "server";
    private JwtUtils() {
    }

    private static final SecretKey secretKey = Jwts.SIG.HS256.key().build();
    public static boolean validate(String jwtToken) {
        return parseToken(jwtToken) != null;
    }


    private static Optional<Claims> parseToken(String jwtToken) {
        var JwtParser = Jwts.parser().verifyWith(secretKey).build();

        try {
            return Optional.of(JwtParser.parseSignedClaims(jwtToken).getPayload());
        } catch (JwtException | IllegalArgumentException e) {
            log.error("JWT Exception Occured");
        }

        return Optional.empty();
    }

    public static Optional<Object> getUsernameFromToken(String jwtToken) {
        var claimsOptional = parseToken(jwtToken);

        return claimsOptional.map(Claims::getSubject);

    }

    public static String generateToken(String username) {

        var current_date = new Date();
        var expiration_time = DateUtils.addMinutes(current_date, 10);
        return Jwts.builder()
                .id(UUID.randomUUID().toString())
                .issuer(ISSUER)
                .subject(username)
                .signWith(secretKey)
                .issuedAt(current_date)
                .expiration(expiration_time)
                .compact();
    }
}
