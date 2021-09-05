package net.javaguides.springboot;

import java.util.HashMap;


import java.util.Map;

import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.service.UserService;
import net.javaguides.springboot.web.dto.UserRegistrationDto;



@RestController
//@RequestMapping("/registrationFromAdmin")
//@RequestMapping(value = {"/registrationFormAdmin"}, method = RequestMethod.POST)
public class UserAdminRegistrationController {
	private UserService userService;

	public UserAdminRegistrationController(UserService userService) {
		super();
		this.userService = userService;
	}

    public
    @RequestMapping("/registrationFromAdmin")
    @ResponseBody
    Map<String, Object> saveUserFromAdmin(@RequestParam String firstName, @RequestParam String lastName,@RequestParam String email,@RequestParam String password
            /*String firstName,
            String lastName,
            String email,
            String password*/
    ) throws Exception {
    	UserRegistrationDto newUsr =new UserRegistrationDto();
    	newUsr.setFirstName(firstName);
    	newUsr.setLastName(lastName);
    	newUsr.setEmail(email);
    	newUsr.setPassword(password);
    	userService.save(newUsr);
    	Map<String, Object> jsonResult = new HashMap<String, Object>();
    	
    	jsonResult.put("success", Boolean.TRUE);
        return jsonResult;
    	
    }
}
