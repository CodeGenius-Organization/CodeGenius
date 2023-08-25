package com.codegenius.user;

import com.codegenius.user.domain.dto.DadosCadastroCompleto;
import com.codegenius.user.domain.dto.DadosCadastroUser;
import com.codegenius.user.domain.model.UserModel;
import com.codegenius.user.domain.repository.UserRepository;
import com.codegenius.user.domain.service.UserService;
import com.codegenius.user.domain.service.UserServiceImpl;
import com.codegenius.user.infra.exception.GlobalExceptionHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class UserServiceImplTest {
	@Mock
	private UserRepository userRepository;

	@InjectMocks
	private UserServiceImpl userService;

	@Mock
	private PasswordEncoder passwordEncoder;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void testUpdateUser_Success() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("Updated Name", "updated@code.genius", "newP4ssword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "Updated Name", "updated@code-genius", "newP4ssword!", true);

		UserModel existingUser = new UserModel();
		existingUser.setId(userId);
		existingUser.setName("Old Name");
		existingUser.setEmail("old@code.genius");
		existingUser.setPassword("oldP4ssword!");

		when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));
		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.empty());

		DadosCadastroUser updatedUser = userService.updateUser(userId, userDTO, userComp);

		verify(userRepository).save(existingUser);
		assertEquals("Updated Name", updatedUser.getName());
		assertEquals("updated@code.genius", updatedUser.getEmail());
		assertEquals("newP4ssword!", updatedUser.getPassword());
	}

	@Test
	public void testUpdateUserWithEmailExist_Failure() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("Updated Name", "old@code.genius", "newP4ssword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "Updated Name", "old@code.genius", "newP4ssword!", true);

		UUID existingUserId = UUID.randomUUID();
		UserModel existingUser =  new UserModel();
		existingUser.setId(existingUserId);
		existingUser.setName("Old Name");
		existingUser.setEmail("old@code.genius");
		existingUser.setPassword("oldP4ssword!");

		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.of(existingUser));

		assertThrows(GlobalExceptionHandler.BadRequestException.class, () -> userService.updateUser(userId, userDTO, userComp));

		verify(userRepository, never()).save(any(UserModel.class));
	}

	@Test
	public void testUpdateUserWithInvalidPassword_Failure() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("Updated Name", "update@code.genius", "newPassword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "Updated Name", "update@code.genius", "newPassword!", true);

		UserModel existingUser = new UserModel();
		existingUser.setId(userId);
		existingUser.setName("Old Name");
		existingUser.setEmail("old@code.genius");
		existingUser.setPassword("oldP4ssword!");

		when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));
		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.empty());

		assertThrows(GlobalExceptionHandler.BadRequestException.class, () -> userService.updateUser(userId, userDTO, userComp));

		verify(userRepository, never()).save(any(UserModel.class));
	}

	@Test
	public void testUpdateUserWithInvalidEmail_Failure() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("Updated Name", "update@codegenius", "newP4ssword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "Updated Name", "update@codegenius", "newP4ssword!", true);

		UserModel existingUser = new UserModel();
		existingUser.setId(userId);
		existingUser.setName("Old Name");
		existingUser.setEmail("old@code.genius");
		existingUser.setPassword("oldP4ssword!");

		when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));
		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.empty());

		assertThrows(GlobalExceptionHandler.BadRequestException.class, () -> userService.updateUser(userId, userDTO, userComp));

		verify(userRepository, never()).save(any(UserModel.class));
	}

	@Test
	public void testSaveUser_Success() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("New Name", "new@code.genius", "newP4ssword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "New Name", "new@code.genius", "newP4ssword!", true);

		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.empty());
		when(passwordEncoder.encode(userDTO.getPassword())).thenReturn("encodedPassword");

		UserModel userModel = new UserModel();
		userModel.setName(userDTO.getName());
		userModel.setEmail(userDTO.getEmail());
		userModel.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		userModel.setActive(userComp.getActive());

		when(userRepository.save(any(UserModel.class))).thenReturn(userModel);

		DadosCadastroUser savedUser = userService.saveUser(userDTO, userComp);

		verify(userRepository).save(any(UserModel.class));

		assertEquals("New Name", savedUser.getName());
		assertEquals("new@code.genius", savedUser.getEmail());
		assertEquals("encodedPassword", savedUser.getPassword());
	}

	@Test
	public void testSaveUserWithInvalidPassword_Failure() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("New Name", "new@code.genius", "newPassword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "New Name", "new@code.genius", "newPassword!", true);

		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.empty());
		when(passwordEncoder.encode(userDTO.getPassword())).thenReturn("encodedPassword");

		UserModel userModel = new UserModel();
		userModel.setName(userDTO.getName());
		userModel.setEmail(userDTO.getEmail());
		userModel.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		userModel.setActive(userComp.getActive());

		when(userRepository.save(any(UserModel.class))).thenReturn(userModel);

		assertThrows(GlobalExceptionHandler.BadRequestException.class, () -> userService.saveUser(userDTO, userComp));

		verify(userRepository, never()).save(any(UserModel.class));
	}

	@Test
	public void testSaveUserWithInvalidEmail_Failure() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("New Name", "new@codegenius", "newP4ssword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "New Name", "new@codegenius", "newP4ssword!", true);

		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.empty());
		when(passwordEncoder.encode(userDTO.getPassword())).thenReturn("encodedPassword");

		UserModel userModel = new UserModel();
		userModel.setName(userDTO.getName());
		userModel.setEmail(userDTO.getEmail());
		userModel.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		userModel.setActive(userComp.getActive());

		when(userRepository.save(any(UserModel.class))).thenReturn(userModel);

		assertThrows(GlobalExceptionHandler.BadRequestException.class, () -> userService.saveUser(userDTO, userComp));

		verify(userRepository, never()).save(any(UserModel.class));
	}

	@Test
	public void testSaveUserWithEmailExist_Failure() {
		UUID userId = UUID.randomUUID();
		DadosCadastroUser userDTO = new DadosCadastroUser("New Name", "new@code.genius", "newP4ssword!");
		DadosCadastroCompleto userComp = new DadosCadastroCompleto(userId, "New Name", "new@code.genius", "newP4ssword!", true);

		UserModel existingUser = new UserModel();
		existingUser.setId(userId);
		existingUser.setName("Old Name");
		existingUser.setEmail("new@code.genius");
		existingUser.setPassword("oldP4ssword!");
		existingUser.setActive(true);

		when(userRepository.findByEmailAndActiveTrue(userDTO.getEmail())).thenReturn(Optional.of(existingUser));
		when(passwordEncoder.encode(userDTO.getPassword())).thenReturn("encodedPassword");

		UserModel userModel = new UserModel();
		userModel.setName(userDTO.getName());
		userModel.setEmail(userDTO.getEmail());
		userModel.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		userModel.setActive(userComp.getActive());

		when(userRepository.save(any(UserModel.class))).thenReturn(userModel);

		assertThrows(GlobalExceptionHandler.BadRequestException.class, () -> userService.saveUser(userDTO, userComp));

		verify(userRepository, never()).save(any(UserModel.class));
	}

}
