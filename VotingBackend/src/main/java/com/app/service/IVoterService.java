package com.app.service;


import java.util.List;
import java.util.Optional;

import com.app.pojos.Voter;

public interface IVoterService {

	 //list all products
	List<Voter> getAllVoters();

	

	Voter getVoterDetails(String vName);
	
	boolean delete(String name);
	
	
	Voter addVoterDetails(Voter transientPOJO);

Voter saveVoter(Voter voter);
	
	Voter fetchVoterByEmailAndPassword(String email, String password);
	
     Voter updateVoter(int voterId,Voter oldDetails);
     

Voter fetchVoterByEmail(String tempEmail);


void sendAccountRegisterEmail(Voter voter);

}
