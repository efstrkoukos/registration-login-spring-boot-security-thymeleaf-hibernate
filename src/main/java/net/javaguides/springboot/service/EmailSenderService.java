package net.javaguides.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
	@Autowired
	private JavaMailSender jms;
	
	public void sendEmail(String ToEmail,String subject,String body) {
		
		SimpleMailMessage message =new SimpleMailMessage();
		message.setFrom("gymgeektest@gmail.com");
		message.setTo(ToEmail);
		message.setText(body);
		message.setSubject(subject);
		
		jms.send(message);
		
	}

}
