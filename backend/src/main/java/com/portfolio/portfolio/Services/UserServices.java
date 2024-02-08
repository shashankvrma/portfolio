package com.portfolio.portfolio.Services;

import com.portfolio.portfolio.Exception.ResourceNotFoundException;
import com.portfolio.portfolio.model.User;
import com.portfolio.portfolio.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServices {

    private final UserRepository userRepository;

    @Autowired
    public UserServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User findById(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.orElse(null);
    }

    public List<User> getAllUsers(){
        return this.userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long user_id) {
        User user = this.userRepository.findById(user_id).orElseThrow(()->new ResourceNotFoundException("User", "id", user_id));
        this.userRepository.delete(user);
    }

    public User updateUser(User update_user, long user_id){
        User user = userRepository.findById(user_id).orElseThrow( () -> new ResourceNotFoundException("User", "id", user_id));
        user.setFullName(update_user.getFullName());
        user.setUsername(update_user.getUsername());
        user.setPassword(update_user.getPassword());
        user.setEmail(update_user.getEmail());
        this.userRepository.save(user);
        return user;
    }


}
