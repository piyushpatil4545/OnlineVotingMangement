package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Admin;

@Repository
public interface IAdminDao extends JpaRepository<Admin, Integer> {
	
	/*
	 * @Query(value = "select a from admins a where a.email=?1 and a.password=?2",
	 * nativeQuery = true) Admin findByEmailAndPassword(String email,String
	 * password);
	 */
	
	public Admin findByEmailAndPassword(String Email,String Password);
	
}
