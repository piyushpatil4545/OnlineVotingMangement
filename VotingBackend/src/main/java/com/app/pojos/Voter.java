package com.app.pojos;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Voters")
public class Voter {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="voter_id")
	private Integer id;
	@Column(length = 50,unique = true , nullable = false)
	private String name;
	@Enumerated(EnumType.STRING)
	@Column(length = 50 , nullable = false)
	private Gender gender;
	@Column(length = 50 , nullable = false)
	private String email;
	@Column(length = 50,unique = true , nullable = false)
	private String password;
	private Boolean status;
	@Column(name = "dob")
	
	private LocalDate dob;
	
	
	public Voter() {
		System.out.println("in ctor of "+getClass().getName());
	}


	public Voter(Integer id, String name, Gender gender, String email, String password, Boolean status, LocalDate dob) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.status = status;
		this.dob = dob;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Gender getGender() {
		return gender;
	}


	public void setGender(Gender gender) {
		this.gender = gender;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Boolean getStatus() {
		return status;
	}


	public void setStatus(Boolean status) {
		this.status = status;
	}


	public LocalDate getDob() {
		return dob;
	}


	public void setDob(LocalDate dob) {
		this.dob = dob;
	}


	@Override
	public String toString() {
		return "Voter [id=" + id + ", name=" + name + ", gender=" + gender + ", email=" + email + ", password="
				+ password + ", status=" + status + ", dob=" + dob + "]";
	}

}
