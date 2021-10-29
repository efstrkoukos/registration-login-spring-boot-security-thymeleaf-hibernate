package net.javaguides.springboot.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.model.UserInfo;
import net.javaguides.springboot.model.UserMacros;

@Repository
@Transactional(propagation = Propagation.REQUIRES_NEW)
@RepositoryRestResource(collectionResourceRel = "user_info", path = "user_info")
public interface UserMacrosRepository extends JpaRepository<UserMacros, Long>{
	/*
	 * @SuppressWarnings("unchecked") UserMacros save (UserMacros entity);
	 */
}
