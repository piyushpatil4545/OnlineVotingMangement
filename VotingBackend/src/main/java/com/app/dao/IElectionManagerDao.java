package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ElectionManager;

public interface IElectionManagerDao extends JpaRepository<ElectionManager, Integer>{

	public ElectionManager findByEmailAndPassword(String Email,String Password);
	
}
