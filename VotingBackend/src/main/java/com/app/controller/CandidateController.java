package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Candidate;
import com.app.pojos.Position;
import com.app.service.ICandidateService;

@RestController
@RequestMapping("/candidates")
@CrossOrigin(origins = "http://localhost:4200")
public class CandidateController {

	@Autowired
	private ICandidateService service;

	public CandidateController() {
		System.out.println("in ctor of " + getClass().getName());
	}

	@GetMapping
	public ResponseEntity<?> listAllCandidates() {
		System.out.println("In List all Voters :: ");
		List<Candidate> candidates = service.getAllCandidates();
		if (candidates.isEmpty()) {
			// empty product list : set sts code : HTTP 204 (no contents)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		// in case of non empty list : OK, send the list
		// sort candidates by position
		service.sortCandidatesByPosition(candidates);
		return new ResponseEntity<>(candidates, HttpStatus.OK);
	}

	@GetMapping("/{candidateName}")
	public ResponseEntity<?> getcandidateDetails(@PathVariable String candidateName) {
		System.out.println("in get prod details " + candidateName);
		// invoke service method
		Optional<Candidate> candidateDetails = service.getCandidateDetails(candidateName);
		// valid name : HTTP 200 , marshalled product details
		if (candidateDetails.isPresent())
			return new ResponseEntity<>(candidateDetails.get(), HttpStatus.OK);
		// in case of invalid name : HTTP 404
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	// request handler method to create a new Candidate

	@GetMapping("/position/{candidatePosition}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> getcandidatePositionDetails(@PathVariable Position candidatePosition) {
		System.out.println("in get prod details " + candidatePosition);
		// invoke service method
		List<Candidate> candidatePositionDetails = service.getCandidatePositionDetails(candidatePosition);
		// valid name : HTTP 200 , marshalled product details
		if (candidatePositionDetails.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		// in case of non empty list : OK, send the list
		return new ResponseEntity<>(candidatePositionDetails, HttpStatus.OK);
	}
	
	@GetMapping("/getposition")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<String> getAllPositions() {
		return service.getAllPositions();
	}
	
	@PostMapping("/addcandidate")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> addCandidate(@RequestBody Candidate c) {
		System.out.println("in add candidate " + c);
		try {
			Candidate savedCandidate = service.addCandidateDetails(c);
			return new ResponseEntity<>(savedCandidate, HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/{candidateId}")
	public ResponseEntity<?> deleteServiceProvider(@PathVariable int candidateId) {
		System.out.println("in the " + getClass().getName());
		try {
			service.deleteCandidate(candidateId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PutMapping("/{candidateId}")
	public ResponseEntity<?> updateDetailspd(@PathVariable int candidateId, @RequestBody Candidate updated) {
		try {
			Candidate up = service.updateCandidate(candidateId, updated);
			return new ResponseEntity<>(up, HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/registercandidate")
	@CrossOrigin(origins = "http://localhost:4200")
	public Candidate registerCandidate(@RequestBody Candidate candidate) throws Exception {
		String tempEmail = candidate.getEmail();
		if (tempEmail != null && "".equals(tempEmail)) {
			Candidate candidateobj = service.fetchCandidateByEmail(tempEmail);
			if (candidateobj != null) {
				throw new Exception("Candidate this id " + tempEmail + "is already exist");
			}

		}
		Candidate candidateobj = null;
		candidateobj = service.saveCandidate(candidate);
		if(candidateobj != null) {
			 service.sendAccountRegisterEmail(candidate);
				return candidateobj;
		}
		return null;

	}
	
	@GetMapping("/vote/{candidateId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Boolean voteCandidateById(@PathVariable Integer candidateId) {
		System.out.print("Candidate Id: "+ candidateId);
		return service.voteCandidate(candidateId);
	}
	
	@GetMapping("/vote/result")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> getCandidatesResult() {
		System.out.println("In List all candidates :: ");
		List<Candidate> candidates = service.getAllCandidates();
		if (candidates.isEmpty()) {
			// empty product list : set sts code : HTTP 204 (no contents)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		// in case of non empty list : OK, send the list
		// sort candidates by position
		service.sortCandidatesByVotes(candidates);
		return new ResponseEntity<>(candidates, HttpStatus.OK);
	}
	
	@GetMapping("/top/result/{candidatePosition}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> getTopCandidatesResult(@PathVariable Position candidatePosition) {
		System.out.println("In List top candidates :: ");
		Candidate candidate = service.getTopCandidatesByPosition(candidatePosition);
		if (candidate == null) {
			// empty product list : set sts code : HTTP 204 (no contents)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		// in case of non empty list : OK, send the list
		return new ResponseEntity<>(candidate, HttpStatus.OK);
	}
	


}
