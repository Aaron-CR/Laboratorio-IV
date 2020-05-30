package com.trabajopractico5.spring.entities;

import lombok.*;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "instrumento")
public class InstrumentoEntity extends BaseEntity {
    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private Integer precio;
    private String costoEnvio;
    private Integer cantidadVendida;
    private String descripcion;
}
