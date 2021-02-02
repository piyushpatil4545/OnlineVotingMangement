package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.ElectionManager;

import com.app.service.IElectionManagerService;


@RestController
@RequestMapping("/electionmanager")
@CrossOrigin(origins = "http://localhost:4200")
public class ElectionManagerController {
	
	@Autowired
	private IElectionManagerService service;
	public ElectionManagerController() {
		
		System.out.println("in ctor of " + getClass().getName());
		
	}
	
	@PostMapping
	public ResponseEntity<?> addElectionManager(@RequestBody ElectionManager m) {
		System.out.println("in add Election Manager " + m);
		try {
			ElectionManager savedElectionManager  = service.addElectionManagerDetails(m);
			return new ResponseEntity<>( savedElectionManager, HttpStatus.OK);

		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
}
	
	@PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public ElectionManager loginElectionManager(@RequestBody ElectionManager electionManager)throws Exception{
   	 String tempEmail=electionManager.getEmail();
   	 String tempPass=electionManager.getPassword();
   	 
   	ElectionManager electionManagerobj= null;
   	 if(tempEmail !=null && tempPass!=null) {
   	 electionManagerobj = service.fetchElectionManagerByEmailAndPassword(tempEmail, tempPass);
   	 }
   	 if(electionManagerobj == null) {
   		 throw new Exception("Bad credential");
   	 }
   	 return electionManagerobj;
    }
	
	
	
	
	
	
	
	
	
	
	
}
