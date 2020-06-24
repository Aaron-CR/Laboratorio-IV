import { Component, OnInit } from '@angular/core';
import { Instrumento } from 'src/app/shared/models/instrumento';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  public instrumentos: Instrumento[] = [];
  public instrumentoActual: Instrumento = {
    id: 0,
    instrumento: '',
    marca: '',
    modelo: '',
    imagen: '',
    precio: 0,
    costoEnvio: '',
    cantidadVendida: 0,
    descripcion: ''
  };

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getAllInstrumentos();
  }

  getAllInstrumentos(): void {
    this.httpService.getAll().subscribe(data => {
      this.instrumentos = data;
    });
  }

  onUpdate(instrumento: Instrumento): void {
    this.instrumentoActual = Object.assign({}, instrumento);
  }

  onDelete(instrumento: Instrumento): void {
    const opcion = confirm('¿Está seguro que desea eliminar este registro?');
    if (opcion === true) {
      this.httpService.delete(instrumento.id).subscribe(() => {
        alert('El registro fue eliminado');
        this.instrumentos.splice(this.instrumentos.indexOf(instrumento), 1);
      });
    }
  }

}
