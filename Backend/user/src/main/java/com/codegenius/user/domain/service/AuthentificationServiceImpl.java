package com.codegenius.user.domain.service;

import com.codegenius.user.domain.model.UserModel;
import com.codegenius.user.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthentificationServiceImpl implements AuthentificationService {
    @Autowired
    private UserRepository repository;
    private PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserModel user = repository.findByEmailAndActiveTrue(email)
                .filter(userModel -> Boolean.TRUE.equals(userModel.getActive()))
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return user;
    }
}
