package example.codingsanji.movies_backend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    public ResponseEntity<String> login(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()){
            User existingUser = user.get();
            if(existingUser.getPassword().equals(Security.hashPassword(password))){
                String token = JWTUtils.Generate(existingUser.getEmail());
                return ResponseEntity.ok(token);
            }else{
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No user found with the provided username");
        }
    }

    public ResponseEntity<String> register(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setPassword(Security.hashPassword(password));
        userRepository.save(newUser);
        return ResponseEntity.ok("Registration successful");
    }

    public ResponseEntity<String> deleteUser(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()){
            userRepository.delete(user.get());
            return ResponseEntity.ok("User deleted successfully");  
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No user found with the provided email");
    }

}
