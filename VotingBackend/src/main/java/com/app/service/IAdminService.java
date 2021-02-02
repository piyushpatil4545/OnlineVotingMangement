package com.app.service;

import com.app.pojos.Admin;

public interface IAdminService {

	/* public String authenticateAdmin(String username , String password); */
	/*
	 * public Admin fetchAdminByEmailAndPassword(String email,String password) {
	 * return dao.findByEmailAndPassword(email,password); }
	 */



	Admin fetchAdminByEmailAndPassword(String email, String password);
	
	
}
