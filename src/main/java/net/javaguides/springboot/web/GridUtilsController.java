package net.javaguides.springboot.web;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
public class GridUtilsController {
	
	@Autowired private UserInfoRepository userInfoRepo;

	//TODO should I have a body fat percentage filed as well?
	public
    @RequestMapping("/newUserInfo")
    @ResponseBody
    Map<String, Object> updateUserMacros(
    		@RequestParam Long weight,
    		@RequestParam Long height,
    		@RequestParam Double fat,
    		@RequestParam Long purpose,
    		@RequestParam Double exce,
    		@RequestParam Double tdeet,
    		@RequestParam Double tdeem,
    		@RequestParam Double bmi,
    		@RequestParam Double protein,
    		@RequestParam Double carbs,
    		@RequestParam Double fats,
    		@RequestParam Long userid
    		){
		
		Map<String, Object> jsonResult = new HashMap<String, Object>();
		Timestamp now = new Timestamp(System.currentTimeMillis());
		
		//userId exists?
    	
    	UserInfo ui=new UserInfo(userid, weight, height, bmi, purpose,exce, now);
    	UserMacros um=new UserMacros(userid, tdeem, tdeet, protein, carbs,fats);
    	
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
    	jsonResult.put("success", Boolean.TRUE);
        return jsonResult;
		
	}
	
	@SuppressWarnings("deprecation")
	@RequestMapping(value = {"/getProgressData"}, method = RequestMethod.GET)
    public
    @ResponseBody
    Map<String, Object> findIeByAfm(
            Long userId
    ) throws Exception {
		Map<String, Object> jsonResult = new HashMap<String, Object>();
		//List<UserInfo> ui =userInfoRepo.getUserProgress(userId);
		//System.out.println(ui.getDate().getMonth());
		return jsonResult;
	}

	

	
	
}
