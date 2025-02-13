package example.codingsanji.movies_backend;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/auth")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserServiceDTO user) {
        return userService.login(user.email(), user.password());
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserServiceDTO user) {
        return userService.register(user.email(), user.password());
    }

    @DeleteMapping("/auth/delete/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username) {
        return userService.deleteUser(username);
    }


    
}
