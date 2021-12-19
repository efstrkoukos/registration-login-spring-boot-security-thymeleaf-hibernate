package net.javaguides.springboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.spel.spi.EvaluationContextExtension;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.data.repository.query.SecurityEvaluationContextExtension;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;

import net.javaguides.springboot.JwtAuthenticationEntryPoint;
import net.javaguides.springboot.JwtRequestFilter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import net.javaguides.springboot.service.UserService;

import org.springframework.security.authentication.AuthenticationManager;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)//new
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	

	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;//new

	@Autowired
	private UserDetailsService jwtUserDetailsService;//new

	@Autowired
	private JwtRequestFilter jwtRequestFilter;//new
	
	
	@Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
        auth.setUserDetailsService(userService);
        auth.setPasswordEncoder(passwordEncoder());//new BCryptPasswordEncoder
        return auth;
    }
	
	
	@Bean
	public SecurityEvaluationContextExtension securityEvaluationContextExtension() {
	    return new SecurityEvaluationContextExtension();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {//new
		// configure AuthenticationManager so that it knows from where to load
		// user for matching credentials
		// Use BCryptPasswordEncoder
		auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {//new
		return super.authenticationManagerBean();
	}
	
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {//new
		// We don't need CSRF for this example
		httpSecurity.csrf().disable()
				// dont authenticate this particular request
				.authorizeRequests().antMatchers("/authenticate",
						"/signin",
						"/registration**", //unhide only for admin's war
						"/gym**",
						"/js/**",
						"/css/**",
						"/img/**",
						"/recources/**",
						"/",
						"/extjs/**",
						"/graphics/**",
						"/scripts/gym.js",
						"/app/view/MainView.js",
						"/jquery/**",
						"/app/view/MainView3.css",
						"/images/**").permitAll().
				// all other requests need to be authenticated
				anyRequest().authenticated().and().
				formLogin()
					.loginPage("/login")
					.permitAll()
					.and().

				exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		//httpSecurity.formLogin().loginProcessingUrl("/signin");
		//httpSecurity.formLogin().defaultSuccessUrl("/gym");

		// Add a filter to validate the tokens with every request
		httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	}
	//@Override
    //protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    //    auth.authenticationProvider(authenticationProvider());
    //}
	
	//@Override
	//protected void configure(HttpSecurity http) throws Exception {
	//	http.authorizeRequests().antMatchers(
	//			 "/registration**",
	//			 "/gym**",
	//                "/js/**",
	 //               "/css/**",
	 //               "/img/**",
	 //               "/registrationFromAdmin**",
	 //               "/recources/**").permitAll()
	//	.anyRequest().authenticated()
	//	.and()
	//	.formLogin()
	//	.loginPage("/login")
	//	.permitAll()
	//	.and()
	//	.logout()
	//	.invalidateHttpSession(true)
	//	.clearAuthentication(true)
	//	.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
	//	.logoutSuccessUrl("/login?logout")
	//	.permitAll();
		
	//	http.csrf().disable();
	//}

}
