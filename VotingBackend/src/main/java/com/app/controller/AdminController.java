package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Admin;
import com.app.service.IAdminService;

@RestController
@RequestMapping("/admins")
@CrossOrigin(origins = "http://localhost:4200")

public class AdminController {
	
	@Autowired
	private IAdminService service;
	public AdminController() {
		
		System.out.println("in ctor of " + getClass().getName());
		
	}
	/*
	 * @PostMapping("/authenticate") public String authenticateAdmin(@RequestBody
	 * String email ,@RequestBody String password) { return
	 * service.authenticateAdmin(email, password); }
	 */
  
     @PostMapping("/login")
     @CrossOrigin(origins = "http://localhost:4200")
     public Admin loginAdmin(@RequestBody Admin admin)throws Exception{
    	 String tempEmail=admin.getEmail();
    	 String tempPass=admin.getPassword();
    	 
    	 Admin adminobj= null;
    	 if(tempEmail !=null && tempPass!=null) {
    		 adminobj=service.fetchAdminByEmailAndPassword(tempEmail, tempPass);
    	 }
    	 if(adminobj == null) {
    		 throw new Exception("Bad credential");
    	 }
    	 return adminobj;
     }
}
