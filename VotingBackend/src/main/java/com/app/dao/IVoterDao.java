package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Voter;

public interface IVoterDao extends JpaRepository<Voter, Integer>{

	Voter findByName(String vName);
	
	public Voter findByEmailAndPassword(String Email,String Password);
	
	public Voter findByEmail(String Email);
	
}
