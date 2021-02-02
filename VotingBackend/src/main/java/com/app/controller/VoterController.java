package com.app.controller;

import java.util.List;

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

import com.app.pojos.Voter;
import com.app.service.IVoterService;

@RestController
@RequestMapping("/voters")
@CrossOrigin(origins = "http://localhost:4200")
public class VoterController {

	// dependancy
	@Autowired
	private IVoterService service;

	public VoterController() {

		System.out.println("in ctor of " + getClass().getName());

	}

	// Restfull end point
	@GetMapping
	public ResponseEntity<?> listAllVoters() {
		System.out.println("In List all Voters :: ");
		List<Voter> voters = service.getAllVoters();
		if (voters.isEmpty())
			// empty product list : set sts code : HTTP 204 (no contents)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		// in case of non empty list : OK, send the list
		return new ResponseEntity<>(voters, HttpStatus.OK);
	}

	@GetMapping("/{voterName}")
	public ResponseEntity<?> getvoterDetails(@PathVariable String voterName) {
		System.out.println("in get prod details " + voterName);
		// invoke service method
		Voter voterDetails = service.getVoterDetails(voterName);
		// valid name : HTTP 200 , marshalled product details
		if (voterDetails != null)
			return new ResponseEntity<>(voterDetails, HttpStatus.OK);
		// in case of invalid name : HTTP 404
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("{voterName}")
	public boolean deleteVoter(@PathVariable String voterName) {
		System.out.println("in get prod details " + voterName);
		service.delete(voterName);
		return true;
	}

	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")

	public Voter loginVoter(@RequestBody Voter voter) throws Exception {

		String tempEmail = voter.getEmail();
		String tempPass = voter.getPassword();

		Voter voterobj = null;
		if (tempEmail != null && tempPass != null) {
			voterobj = service.fetchVoterByEmailAndPassword(tempEmail, tempPass);
		}
		if (voterobj == null) {
			throw new Exception("Bad credential");
		}
		return voterobj;
	}

	@PutMapping("/{voterId}")
	public ResponseEntity<?> updateDetails(@PathVariable int voterId, @RequestBody Voter updated) {
		try {
			Voter up = service.updateVoter(voterId, updated);
			return new ResponseEntity<>(up, HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/addvoter")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> addVoter(@RequestBody Voter v) {
		System.out.println("in add voter" + v);
		try {
			Voter savedVoter = service.addVoterDetails(v);
			return new ResponseEntity<>(savedVoter, HttpStatus.OK);

		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/registervoter")
	@CrossOrigin(origins = "http://localhost:4200")
	public Voter registerVoter(@RequestBody Voter voter) throws Exception {
		String tempEmail = voter.getEmail();
		if (tempEmail != null && "".equals(tempEmail)) {
			Voter voterobj = service.fetchVoterByEmail(tempEmail);
			if (voterobj != null) {
				throw new Exception("Voter this id " + tempEmail + "is already exist");
			}

		}
		Voter voterobj = null;
		voterobj = service.saveVoter(voter);
		if (voterobj != null) {
		 service.sendAccountRegisterEmail(voterobj);
			return voterobj;
		}
		return null;

	}

}
