package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IAdminDao;

import com.app.pojos.Admin;
@Service

public class AdminServiceImpl implements IAdminService{



	@Autowired
	private IAdminDao dao;	
	private Admin a;
	

	/*
	 * @Override public String authenticateAdmin(String email, String password) { //
	 * TODO Auto-generated method stub this.a =
	 * dao.findByEmailAndPassword(email,password); return
	 * this.a==null?"/admin.html":"/invalid.html"; }
	 */
	
	@Override
  public Admin fetchAdminByEmailAndPassword(String email,String password){
	  return dao.findByEmailAndPassword(email, password);
  }


}
