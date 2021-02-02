package com.app.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.dao.ICandidateDao;
import com.app.pojos.Candidate;
import com.app.pojos.Position;

@Service
@Transactional
public class CandidateServiceImpl implements ICandidateService {

	@Autowired
	private ICandidateDao dao;
	
	@Autowired
	private JavaMailSender mailSender;

	@Override
	public List<Candidate> getAllCandidates() {
		// TODO Auto-generated method stub
		System.out.println("Dao Implemenation CLass :: + " + dao.getClass().getName());
		return dao.findAll();
	}

	public Optional<Candidate> getCandidateDetails(String cName) {
		// TODO Auto-generated method stub
		return dao.findByName(cName);
	}

	public List<Candidate> getCandidatePositionDetails(Position cPosition) {
		// TODO Auto-generated method stub
		return dao.findByPosition(cPosition);
	}

	@Override
	public Candidate addCandidateDetails(Candidate transientPOJO) {
		// TODO Auto-generated method stub
		return dao.save(transientPOJO);
	}

	@Override
	public Candidate deleteCandidate(int candidateId) {
		// TODO Auto-generated method stub
		dao.deleteById(candidateId);
		return null;
	}

	@Override
	public Candidate updateCandidate(int candidateId, Candidate oldDetails) {
		Optional<Candidate> checkPresence = dao.findById(candidateId);
		if (checkPresence.isPresent()) {
			Candidate updatedDetails = checkPresence.get();
			updatedDetails.setName(oldDetails.getName());
			updatedDetails.setGender(oldDetails.getGender());
			updatedDetails.setParty(oldDetails.getParty());
			updatedDetails.setDetails(oldDetails.getDetails());
			updatedDetails.setDob(oldDetails.getDob());
			updatedDetails.setPosition(oldDetails.getPosition());

			return updatedDetails;
		}
		return null;
	}

	public Candidate saveCandidate(Candidate candidate) {
		candidate.setVotes(0);
		return dao.save(candidate);
	}

	public Candidate fetchCandidateByEmail(String email) {
		return dao.findByEmail(email);
	}

	@Override
	public void sortCandidatesByPosition(List<Candidate> candidates) {
		Collections.sort(candidates, new Comparator<Candidate>() {
			@Override
			public int compare(Candidate o1, Candidate o2) {
				// TODO Auto-generated method stub
				return o1.getPosition().compareTo(o2.getPosition());
			}
		});
	}

	@Override
	public Boolean voteCandidate(Integer candidateId) {
		Optional<Candidate> checkPresence = dao.findById(candidateId);
		if (checkPresence.isPresent()) {
			Candidate candidate = checkPresence.get();
			candidate.setVotes(candidate.getVotes() + 1);
			dao.save(candidate);
			return true;
		}
		return false;
	}

	@Override
	public void sortCandidatesByVotes(List<Candidate> candidates) {
		Collections.sort(candidates, new Comparator<Candidate>() {
			@Override
			public int compare(Candidate o1, Candidate o2) {
				// TODO Auto-generated method stub
				return o2.getVotes().compareTo(o1.getVotes());
			}
		});
	}

	@Override
	public Candidate getTopCandidatesByPosition(Position candidatePosition) {
		List<Candidate> candidates = getCandidatePositionDetails(candidatePosition);
		return Collections.max(candidates, Comparator.comparing(c -> c.getPosition()));
	}

	@Override
	public List<String> getAllPositions() {
return dao.getAllPositions();
	}

	@Override
	public void sendAccountRegisterEmail(Candidate candidate) {
		// TODO Auto-generated method stub
		SimpleMailMessage mailCandidate = new SimpleMailMessage();
		mailCandidate.setTo(candidate.getEmail());
		mailCandidate.setFrom("onlinevotingmanagement@gmail.com");
		mailCandidate.setSubject(" Candidate Registerd Successfully !" + candidate.getName());
		mailCandidate.setText("Candidate Registered Successfully your  Name \n Student Id : "+ candidate.getName() + "\n Party Name  :" + candidate.getParty() + "\n Position :" + candidate.getPosition());
		mailSender.send(mailCandidate);
	}

}
