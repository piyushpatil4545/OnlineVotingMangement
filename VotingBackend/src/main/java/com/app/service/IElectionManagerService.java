package com.app.service;

import com.app.pojos.ElectionManager;

public interface IElectionManagerService {

	ElectionManager addElectionManagerDetails(ElectionManager transientPOJO);
  
	ElectionManager   fetchElectionManagerByEmailAndPassword(String email, String password);
	
}
