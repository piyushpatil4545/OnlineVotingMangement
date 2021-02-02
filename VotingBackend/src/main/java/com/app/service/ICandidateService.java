package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Candidate;
import com.app.pojos.Position;


public interface ICandidateService {

	List<Candidate> getAllCandidates();

	Optional<Candidate> getCandidateDetails(String candidateName);

	Candidate addCandidateDetails(Candidate transientPOJO);

	Candidate deleteCandidate(int candidateId);
	
	Candidate updateCandidate(int candidateId,Candidate oldDetails);
	//boolean delete(String name);

	Candidate fetchCandidateByEmail(String tempEmail);

	Candidate saveCandidate(Candidate candidate);
	
	List<Candidate> getCandidatePositionDetails(Position candidatePosition);

	void sortCandidatesByPosition(List<Candidate> candidates);

	Boolean voteCandidate(Integer candidateId);

	void sortCandidatesByVotes(List<Candidate> candidates);

	Candidate getTopCandidatesByPosition(Position candidatePosition);
	
	List<String> getAllPositions();

	void sendAccountRegisterEmail(Candidate candidate);
	
}
