package net.javaguides.springboot.model;

import java.sql.Timestamp;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.JoinColumn;

@Entity
@Table(name =  "users_v", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Users_V {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	private String email;
	
	
	
	private Timestamp birthday;
	private Long gymid;
	private Long gender;
	private String username;
	private Long telephone;
	private Boolean enabled;
	
	
	public Users_V() {
		
	}
	
	public Users_V(String firstName, String lastName, String email,Timestamp birthday,Long gymid,Long gender,String username,Long telephone,Boolean enabled) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.birthday=birthday;
		this.gymid=gymid;
		this.gender=gender;
		this.username=username;
		this.telephone=telephone;
		
	}
	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getTelephone() {
		return telephone;
	}

	public void setTelephone(Long telephone) {
		this.telephone = telephone;
	}

	public Timestamp getBirthday() {
		return birthday;
	}

	public void setBirthday(Timestamp birthday) {
		this.birthday = birthday;
	}

	public Long getGymid() {
		return gymid;
	}

	public void setGymid(Long gymid) {
		this.gymid = gymid;
	}

	public Long getGender() {
		return gender;
	}

	public void setGender(Long gender) {
		this.gender = gender;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	/*
	 * CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`localhost` SQL SECURITY
	 * DEFINER VIEW `gg`.`users_v` AS SELECT `gg`.`user`.`id` AS `id`,
	 * `gg`.`user`.`email` AS `email`, `gg`.`user`.`first_name` AS `first_name`,
	 * `gg`.`user`.`last_name` AS `last_name`, `gg`.`user`.`birthday` AS `birthday`,
	 * `gg`.`user`.`gender` AS `gender`, `gg`.`user`.`gymid` AS `gymid`,
	 * `gg`.`user`.`telephone` AS `telephone`, `gg`.`user`.`username` AS `username`,
	 * `gg`.`user`.`enabled` AS `enabled` FROM `gg`.`user`
	 * 
	 */

}
