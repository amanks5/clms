package com.clms.api.authentication.registration.service;

import com.clms.api.authentication.core.authentication_profiles.AuthenticationProfile;
import com.clms.api.authentication.core.authentication_profiles.AuthenticationProfileRepository;
import com.clms.api.authentication.passwords.service.PlainTextPasswordToHashedPasswordService;
import com.clms.api.authentication.registration.domain.dtos.RegistrationDTO;
import com.clms.api.authentication.registration.domain.exceptions.InvalidRegistrationRequestException;
import com.clms.api.common.util.passwords.PasswordValidatorUtil;
import com.clms.api.users.UserRepository;
import com.clms.api.users.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class RegistrationService {

    private final UserRepository userRepository;
    private final UserService userService;
    private final PlainTextPasswordToHashedPasswordService plainTextPasswordToHashedPasswordService;
    private final RegisteredUserEventPublicationService registeredUserEventPublicationService;
    private final AuthenticationProfileRepository authenticationProfileRepository;

    public void register(RegistrationDTO registrationDTO) {
        boolean isRegistrationValid = true;
        InvalidRegistrationRequestException invalidRegistrationRequestException = new InvalidRegistrationRequestException("Invalid Registration Response from the Client");

        if (!PasswordValidatorUtil.validate(registrationDTO.getPassword())) {
            isRegistrationValid = false;
            invalidRegistrationRequestException.addInvalidKey("password", "Password is invalid.");
        }

        AuthenticationProfile authenticationProfile = authenticationProfileRepository.getByUsername(registrationDTO.getUsername()).orElse(null);
        if (userService.doesUserExistByUsername(registrationDTO.getUsername()) || authenticationProfile != null) {
            isRegistrationValid = false;
            invalidRegistrationRequestException.addInvalidKey("username", "Username is already in use.");
        }

        // return if invalid
        if (!isRegistrationValid) {
            throw invalidRegistrationRequestException;
        }

        authenticationProfile = new AuthenticationProfile();
        authenticationProfile.setUsername(registrationDTO.getUsername());
        authenticationProfile.setPasswordHash(plainTextPasswordToHashedPasswordService.convert(registrationDTO.getPassword()));
        authenticationProfile.setUserId(userService.createUserWithUsername(authenticationProfile.getUsername()));
        authenticationProfileRepository.saveAndFlush(authenticationProfile);
        log.info("User registered with username: {}", registrationDTO.getUsername());
    }
}


