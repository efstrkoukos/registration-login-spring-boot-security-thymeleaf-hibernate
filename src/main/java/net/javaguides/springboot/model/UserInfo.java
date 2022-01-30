package net.javaguides.springboot.model;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import net.javaguides.springboot.model.UserMacros;


import javax.persistence.JoinColumn;

@Entity
@Table(name = "user_info")
public class UserInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "user_id")
	private Long user_id;
	@Column(name = "weight")
	private Long weight;
	@Column(name = "height")
	private Long height;
	@Column(name = "bmi")
	private Double bmi;
	@Column(name = "goal")
	private Long goal;
	@Column(name = "exce")
	private Double exce;
	@Column(name = "date")
	private Timestamp date;
	
	@OneToOne(mappedBy = "user_info_id",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private UserMacros usermacros;
	

	public UserMacros getUsermacros() {
		return usermacros;
	}

	public void setUsermacros(UserMacros usermacros) {
		this.usermacros = usermacros;
	}

	

	public UserInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserInfo(Long user_id, Long weight, Long height, Double bmi, Long goal, Double exce, Timestamp date) {
		super();
		this.user_id = user_id;
		this.weight = weight;
		this.height = height;
		this.bmi = bmi;
		this.goal = goal;
		this.exce = exce;
		this.date = date;
		
	}


	


	public Timestamp getDate() {
		return date;
	}


	public void setDate(Timestamp date) {
		this.date = date;
	}

	
	
	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public Long getWeight() {
		return weight;
	}

	public void setWeight(Long weight) {
		this.weight = weight;
	}

	public Long getHeight() {
		return height;
	}

	public void setHeight(Long height) {
		this.height = height;
	}

	public Double getBmi() {
		return bmi;
	}

	public void setBmi(Double bmi) {
		this.bmi = bmi;
	}

	public Long getGoal() {
		return goal;
	}

	public void setGoal(Long goal) {
		this.goal = goal;
	}

	public Double getExce() {
		return exce;
	}

	public void setExce(Double exce) {
		this.exce = exce;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
}
