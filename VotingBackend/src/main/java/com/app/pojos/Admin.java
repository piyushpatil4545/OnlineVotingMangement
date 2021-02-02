package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name="admins")
public class Admin {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="admin_id")
	private Integer admin_id;
	@Column(length = 50,unique = true , nullable = false)
	private String name;
	@Column(length = 50 , nullable = false)
	private String email;
	@Column(length = 50,unique = true , nullable = false)
	private String password;
	@Column(name = "scheduled_on")
	private LocalDate scheduledOn;
	
	
	
	
	public Admin() {
		
		System.out.println("in ctor of "+getClass().getName());
		
	}



	public Admin(Integer admin_id, String name, String email, String password, LocalDate scheduledOn) {
		this.admin_id = admin_id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.scheduledOn = scheduledOn;
	}



	public Integer getAdmin_id() {
		return admin_id;
	}



	public void setAdmin_id(Integer admin_id) {
		this.admin_id = admin_id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
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



	public LocalDate getScheduledOn() {
		return scheduledOn;
	}



	public void setScheduledOn(LocalDate scheduledOn) {
		this.scheduledOn = scheduledOn;
	}



	@Override
	public String toString() {
		return "Admin [admin_id=" + admin_id + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", scheduledOn=" + scheduledOn + "]";
	}

	
}
