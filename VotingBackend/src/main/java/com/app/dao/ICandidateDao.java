package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Candidate;
import com.app.pojos.Position;



public interface ICandidateDao extends JpaRepository<Candidate, Integer>{

	Optional<Candidate> findByName(String cName);

	public Candidate findByEmail(String Email);

	List<Candidate> findByPosition(Position cPosition);
	@Query("select distinct c.position from Candidate c")
	List<String> getAllPositions();
}
