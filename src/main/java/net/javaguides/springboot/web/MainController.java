package net.javaguides.springboot.web;

import java.io.IOException;
import java.util.HashMap;
import net.javaguides.springboot.JwtAuthenticationController;
import net.javaguides.springboot.JwtTokenUtil;
import net.javaguides.springboot.model.JwtRequest;
import net.javaguides.springboot.model.JwtResponse;
import net.javaguides.springboot.service.EmailSenderService;
import net.javaguides.springboot.service.UserServiceImpl;
import net.javaguides.springboot.web.dto.Statics;

import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;



@Controller
public class MainController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserServiceImpl userDetailsService;
	
	@Autowired
	private EmailSenderService ess;
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("/")
	public String home() {
		return "gym";
	}
	
	/*Testing purposes
	 * @GetMapping("/sendmail") public String sendmail() throws AddressException,
	 * MessagingException, IOException { ess.sendEmail("efstrkoukos@gmail.com",
	 * "TestSubject", "Thebodyofthe email");
	 * 
	 * return "ok"; }
	 */
	
	
	
	@RequestMapping(value = "/signin", method = RequestMethod.POST)
	public  ResponseEntity<?> logmein(
            @RequestParam(value = "username")
            final String username,
            @RequestParam(value = "password")
            final String password) throws Exception {
		
		JwtRequest authenticationRequest=new JwtRequest(username,password);
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		
		final String token = jwtTokenUtil.generateToken(userDetails);
		//TODO add check for Role and handle it
		return ResponseEntity.ok(new JwtResponse(token));
	}
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	@RequestMapping("/getSession")
    @ResponseBody
    String getSession()
    		throws Exception {
				return "Connection success";
		
	}
	
	@RequestMapping("/getNotifs")
    @ResponseBody
    String getNotifs()
    		throws Exception {
				return "dummy_notification";//TODO this is dummy to see if poller works
		
	}
	
	
}
