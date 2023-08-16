package com.codegenius.user.infra.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Configuration class for user security settings.
 *
 * @author hidek
 * @since 2023-08-09
 */
@Configuration
@EnableWebSecurity
public class UserSecurity {
    @Autowired
    private SecurityFilter securityFilter;
    /**
     * Bean for creating a BCrypt password encoder.
     *
     * @return A BCryptPasswordEncoder instance.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder();}

    /**
     * Bean for configuring security filters and rules.
     *
     * @param http The HttpSecurity object for configuring security.
     * @return A SecurityFilterChain instance.
     * @throws Exception If an exception occurs during configuration.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/login").permitAll()
                .antMatchers(HttpMethod.POST, "/user").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    /**
     * Bean for creating an AuthenticationManager.
     *
     * @param configuration The AuthenticationConfiguration instance.
     * @return An AuthenticationManager instance.
     * @throws Exception If an exception occurs during configuration.
     *
     * @author hidek
     * @since 2023-08-09
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
