package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="election_manager")
public class ElectionManager {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="election_id")
	private Integer election_id;
	@Column(length = 50,unique = true , nullable = false)
	private String name;
	@Column(length = 50,unique = true , nullable = false)
	private String email;
	@Column(length = 50,unique = true , nullable = false)
	private String password;
	@Column(name = "election_date")
	
	private LocalDate election_date;
	@Column(name="start_time")
	private LocalDateTime start_time;
	@Column(name="end_time")
	private LocalDateTime end_time;
	
	
	public ElectionManager() {
		
		System.out.println("in ctor of "+getClass().getName());
	}


	public ElectionManager(Integer election_id, String name, String email, String password, LocalDate election_date,
			LocalDateTime start_time, LocalDateTime end_time) {
		this.election_id = election_id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.election_date = election_date;
		this.start_time = start_time;
		this.end_time = end_time;
	}


	public Integer getElection_id() {
		return election_id;
	}


	public void setElection_id(Integer election_id) {
		this.election_id = election_id;
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


	public LocalDate getElection_date() {
		return election_date;
	}


	public void setElection_date(LocalDate election_date) {
		this.election_date = election_date;
	}


	public LocalDateTime getStart_time() {
		return start_time;
	}


	public void setStart_time(LocalDateTime start_time) {
		this.start_time = start_time;
	}


	public LocalDateTime getEnd_time() {
		return end_time;
	}


	public void setEnd_time(LocalDateTime end_time) {
		this.end_time = end_time;
	}


	@Override
	public String toString() {
		return "ElectionManager [election_id=" + election_id + ", name=" + name + ", email=" + email + ", password="
				+ password + ", election_date=" + election_date + ", start_time=" + start_time + ", end_time="
				+ end_time + "]";
	}

}
