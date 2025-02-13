package example.codingsanji.movies_backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {
private AuthFilter authFilter;
    public SecurityConfig(AuthFilter auth) {
        authFilter = auth;
    } 

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf((csrf)->{csrf.disable();})
            .sessionManagement((sm)->{
                    sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
                })
            .authorizeHttpRequests(rq->
                rq.requestMatchers("/api/**").permitAll()
                .requestMatchers("/auth/**").authenticated()
            )
            .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}
