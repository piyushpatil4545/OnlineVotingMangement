package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.dao.IVoterDao;
import com.app.pojos.Voter;
@Service
@Transactional
public class VoterServiceImpl implements IVoterService {

	@Autowired
	private IVoterDao dao;	
	@Autowired
	private JavaMailSender mailSender;
	
	@Override
	public List<Voter> getAllVoters() {
		// TODO Auto-generated method stub
		System.out.println("Dao Implemenation CLass :: + " + dao.getClass().getName());
		return dao.findAll();
	}
	@Override
	public Voter getVoterDetails(String name) {
		// TODO Auto-generated method stub
		return dao.findByName(name);
	}
	@Override
	public boolean delete(String name) {
		Voter v= dao.findByName(name);
		dao.delete(v);
		return true;
		
	}
	
	

	
	@Override
  public Voter fetchVoterByEmailAndPassword(String email,String password){
	  return dao.findByEmailAndPassword(email, password);
  }
	
	
	
	@Override
	public Voter updateVoter(int voterId, Voter oldDetails) {
		Optional<Voter>checkPresence=dao.findById(voterId);
		if(checkPresence.isPresent())
		{
			Voter updatedDetails=checkPresence.get();
			updatedDetails.setName(oldDetails.getName());
			updatedDetails.setGender(oldDetails.getGender());
			updatedDetails.setEmail(oldDetails.getEmail());
			updatedDetails.setDob(oldDetails.getDob());
			
		
			return updatedDetails;
		}
		return null;
	}
	


@Override
	public Voter addVoterDetails(Voter transientPOJO) {
		// TODO Auto-generated method stub candidate.setVotes(0);
	         
		return dao.save(transientPOJO);
	}
	

public Voter saveVoter(Voter voter) {
voter.setStatus(false);
 return dao.save(voter);
		
	}


	public Voter fetchVoterByEmail(String email) {
		return dao.findByEmail(email);
		
	}
	@Override
	public void sendAccountRegisterEmail(Voter voter) {
		// TODO Auto-generated method stub
		SimpleMailMessage mailVoter = new SimpleMailMessage();
        mailVoter.setTo(voter.getEmail());
        mailVoter.setFrom("onlinevotingmanagement@gmail.com");
        mailVoter.setSubject("Student Account Successfully Registerd !" + voter.getName());
        mailVoter.setText("Account Registered Successfully your Student Name \n Student Id : "+ voter.getId() + "\n Student Name  :" + voter.getName() + "\n Password :" + voter.getPassword());
		mailSender.send(mailVoter);
		
	}

	
	
}
