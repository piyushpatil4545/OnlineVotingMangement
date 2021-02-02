package com.app.service;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IElectionManagerDao;
import com.app.pojos.Admin;
import com.app.pojos.ElectionManager;



@Service
@Transactional
public class ElectionManagerServiceImpl implements IElectionManagerService {
	
	@Autowired
	private IElectionManagerDao dao;	
	
	
	@Override
	public ElectionManager addElectionManagerDetails(ElectionManager transientPOJO) {
		// TODO Auto-generated method stub
		return dao.save(transientPOJO);
	} 
	
	
	@Override
	  public  ElectionManager fetchElectionManagerByEmailAndPassword(String email,String password){
		  return dao.findByEmailAndPassword(email, password);
	  }
	
}
