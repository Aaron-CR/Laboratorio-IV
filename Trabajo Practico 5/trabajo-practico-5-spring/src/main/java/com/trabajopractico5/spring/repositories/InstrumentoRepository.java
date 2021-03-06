package com.trabajopractico5.spring.repositories;

import com.trabajopractico5.spring.entities.InstrumentoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstrumentoRepository extends JpaRepository<InstrumentoEntity, Integer> {
}
