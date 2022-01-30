package net.javaguides.springboot;


import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
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

import net.javaguides.springboot.model.Role;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.model.UserInfo;
import net.javaguides.springboot.model.UserMacros;
import net.javaguides.springboot.repository.RoleRepository;
import net.javaguides.springboot.repository.UserInfoRepository;
import net.javaguides.springboot.repository.UserMacrosRepository;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.service.EmailSenderService;
import net.javaguides.springboot.service.UserService;
import net.javaguides.springboot.service.UserServiceImpl;
import net.javaguides.springboot.web.dto.Statics;
import net.javaguides.springboot.web.dto.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

@RestController
public class UserAdminRegistrationController {
	
	@Autowired private UserInfoRepository userInfoRepo;
	@Autowired
	private RoleRepository roleRepository;
	
	 
	@Autowired
	private UserRepository userRepository;
	private UserService userService;
	
	@Autowired
	EmailSenderService ess;
	
	public UserAdminRegistrationController(UserService userService) {
		super();
		this.userService = userService;
	}

    public
    @RequestMapping("/registrationFromAdmin")
    @ResponseBody
    Map<String, Object> saveUserFromAdmin(
    		@RequestParam String firstName, 
    		@RequestParam String lastName,
    		@RequestParam String email,
    		@RequestParam String password,
    		@RequestParam String birthday,
    		@RequestParam Long sex,
    		@RequestParam Long height,
    		@RequestParam Long weight,
    		@RequestParam Double fat,
    		@RequestParam Long purpose,
    		@RequestParam Double exce,
    		@RequestParam Long telephone,
    		@RequestParam String username,
    		@RequestParam Double tdeet,
    		@RequestParam Double tdeem,
    		@RequestParam Double bmi,
    		@RequestParam Double protein,
    		@RequestParam Double carbs,
    		@RequestParam Double fats
    ) throws Exception {
    	Map<String, Object> jsonResult = new HashMap<String, Object>();
    	
    	//TODO complete error handling
    	
    	//UserRegistrationDto userdto=UserServiceImpl.getCurrentUserByPrincipal();
    	    	
    	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    	String usremail=((UserDetails) auth.getPrincipal()).getUsername();
    	//Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    	//String currentPrincipalName = authentication.getName();
       	List<Integer> Usergym=userRepository.findUserId(usremail);//Is this the right way?is email-userid one to one
    	if(Usergym==null) {
    		jsonResult.put("error", "error 1");
    		jsonResult.put("success", Boolean.FALSE);
            return jsonResult;
    	}
    	int gymid=Usergym.get(0);
    	Long gymsid=Long.valueOf(gymid);
    	
    	DateFormat dateFormat;
    	if(birthday.contains("/"))
    	 dateFormat = new SimpleDateFormat("dd/MM/yyyy");
    	else
    	 dateFormat = new SimpleDateFormat("dd-MM-yyyy");
    	Date date = dateFormat.parse(birthday);
    	long time = date.getTime();
    	new Timestamp(time);
    	Timestamp ts=new Timestamp(time);  
    	    	
    	String newpass=Statics.generateRand();
    	
    	Role memberRole = roleRepository.findByName("MEMBER");
    	
    	UserRegistrationDto newUsr =new UserRegistrationDto();
    	newUsr.setFirstName(firstName);
    	newUsr.setLastName(lastName);
    	newUsr.setEmail(email);
    	newUsr.setPassword(newpass);
    	newUsr.setBirthday(ts);
    	newUsr.setGymid(gymsid);
    	newUsr.setGender(sex);
    	newUsr.setTelephone(telephone);
    	newUsr.setUsername(username);
    	newUsr.setRole(memberRole);
    	try {
    	userService.save(newUsr);
    	}catch(Exception e) {
    		e.printStackTrace();
            jsonResult.put("success", Boolean.FALSE);
            jsonResult.put("error", "error 5");
            return jsonResult;
    	}
    	
    	
    	List<Integer> Usera=userRepository.findUserId(email);
    	if(Usera==null) {
    		jsonResult.put("error", "error 2");
    		jsonResult.put("success", Boolean.FALSE);
            return jsonResult;
    	}
    	int usersid=Usera.get(0);
    	if(Usera.get(0)!=null)//if email exists multiple times
    		jsonResult.put("failure", Boolean.FALSE);
    	
    	
    	Long userid2=Long.valueOf(usersid);
    	
    	
    	//userMacrosRepo.deleteAllInBatch();
    	//userInfoRepo.deleteAllInBatch();//TODO add new fields to user object
    	Timestamp now = new Timestamp(System.currentTimeMillis());
    	
    	UserInfo ui=new UserInfo(userid2, weight, height, bmi, purpose,exce, now);
    	UserMacros um=new UserMacros(userid2, tdeem, tdeet, protein, carbs,fats);
    	
    	ui.setUsermacros(um);
    	um.setUserinfo(ui);
		
    	try {
    	userInfoRepo.save(ui);
    	}catch(Exception e) {
    		e.printStackTrace();
            jsonResult.put("success", Boolean.FALSE);
            jsonResult.put("error", "error 3");
            return jsonResult;
    	}
    	
    	//ess.sendEmail(email, "Εγγραφή στο GymGeek", Statics.emailBody(firstName,newpass)); //Real thing
    	System.out.println("Password "+newpass);
    	ess.sendEmail("efstrkoukos@gmail.com", "Εγγραφή στο GymGeek", Statics.emailBody(firstName,newpass));//Test purposes
    	//jsonResult.put("userid", usersid);
    	jsonResult.put("success", Boolean.TRUE);
        return jsonResult;
    	
    }
}
