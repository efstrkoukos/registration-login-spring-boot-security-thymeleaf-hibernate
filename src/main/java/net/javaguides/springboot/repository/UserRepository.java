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

@Repository
@Transactional(propagation = Propagation.REQUIRES_NEW)
@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
	
	@Query(
            value = "SELECT o.lastName FROM User o"
                    + " WHERE o.id =:#{#id}",
            nativeQuery = false
    )
	
    public String findFirstName(@Param("id") Long id);
}
