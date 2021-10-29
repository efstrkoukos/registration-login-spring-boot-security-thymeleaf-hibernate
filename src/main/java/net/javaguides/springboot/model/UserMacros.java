package net.javaguides.springboot.model;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import net.javaguides.springboot.model.UserInfo;

@Entity
@Table(name = "user_macros")
public class UserMacros {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "user_id")
	private Long user_id;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_info_id",nullable=false )//referencedColumnName = "id"
    private UserInfo user_info_id;
	
	@Column(name = "tdee_m")
	private Double tdeem;
	@Column(name = "tdee_g")
	private Double tdeeg;
	@Column(name = "protein")
	private Double protein;
	@Column(name = "carbs")
	private Double carbs;
	public UserMacros() {
		super();
	}

	@Column(name = "fats")
	private Double fats;
	
	

	
	public UserMacros(Long user_id, Double tdeem, Double tdeeg, Double protein, Double carbs, Double fats) {
		super();
		this.user_id = user_id;
		this.tdeem = tdeem;
		this.tdeeg = tdeeg;
		this.protein = protein;
		this.carbs = carbs;
		this.fats = fats;
	}

	
	public UserInfo getUserinfo() {
		return user_info_id;
	}


	public void setUserinfo(UserInfo userinfo) {
		this.user_info_id = userinfo;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	

	public Double getTdeem() {
		return tdeem;
	}

	public void setTdeem(Double tdeem) {
		this.tdeem = tdeem;
	}

	public Double getTdeeg() {
		return tdeeg;
	}

	public void setTdeeg(Double tdeeg) {
		this.tdeeg = tdeeg;
	}

	public Double getProtein() {
		return protein;
	}

	public void setProtein(Double protein) {
		this.protein = protein;
	}

	public Double getCarbs() {
		return carbs;
	}

	public void setCarbs(Double carbs) {
		this.carbs = carbs;
	}

	public Double getFats() {
		return fats;
	}

	public void setFats(Double fats) {
		this.fats = fats;
	}
		


	
	
}
