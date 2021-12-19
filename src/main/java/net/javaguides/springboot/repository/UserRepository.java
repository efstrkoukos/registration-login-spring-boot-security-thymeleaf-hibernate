package net.javaguides.springboot.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import net.javaguides.springboot.model.User;

@Repository
@Transactional(propagation = Propagation.REQUIRES_NEW)
@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends PagingAndSortingRepository<User, Long>{
	User findByEmail(String email);
	
	@Query(
            value = "SELECT o.lastName FROM User o"
                    + " WHERE o.id =:#{#id}",
            nativeQuery = false
    )
	
    public String findFirstName(@Param("id") Long id);
	
	@Query(
            value = "SELECT o.id FROM User o"
                    + " WHERE o.email =:#{#email} order by o.id desc",
            nativeQuery = false
    )
	
    public List<Integer> findUserId(@Param("email") String email);
	

	@Query(
            value = "SELECT o.firstName,o.lastName,o.email,o.birthday,o.gender,o.telephone,o.enabled FROM User o "
                    + " WHERE o.gymid =:#{principal.id} ",
            nativeQuery = false
    )
	
	 public List<User> findAllGymUsers();
	
	
	
	
}
