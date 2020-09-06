package skillPortal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import skillPortal.model.Auth_user;
import skillPortal.model.Employee_Skill;

@Repository
public interface Employee_SkillRepo extends JpaRepository<Employee_Skill,String> {

	
	@Query(value="SELECT * FROM employee_skill WHERE user_userid = :userid",nativeQuery=true)
	List<Employee_Skill> findAllSkills(String userid);

	
}
