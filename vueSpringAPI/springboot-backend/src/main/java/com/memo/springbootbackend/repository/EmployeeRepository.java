package com.memo.springbootbackend.repository;

import com.memo.springbootbackend.entitiy.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
