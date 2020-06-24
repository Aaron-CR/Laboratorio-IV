import { Component, OnInit, Input, ViewChild, ElementRef, Host } from '@angular/core';
import { ProductTableComponent } from '../product-table.component';
import { Instrumento } from 'src/app/shared/models/instrumento';
import { HttpService } from 'src/app/shared/services/http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public isError = false;

  @Input() instrumentoActual: Instrumento;
  @Input() instrumentos: Instrumento[];

  @ViewChild('btnClose') btnClose: ElementRef;

  constructor(
    @Host() private tabla: ProductTableComponent,
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  onSaveInstrumento(formInstrumento: NgForm): void {
    console.log(formInstrumento.value);
    if (formInstrumento.invalid || this.instrumentoActual.imagen === '') {
      this.isError = true;
    } else {
      if (formInstrumento.value.id === 0) {
        this.add(formInstrumento.value);
      } else {
        this.instrumentoActual = formInstrumento.value;
        this.update(this.instrumentoActual);
      }
      this.btnClose.nativeElement.click();
    }
  }

  add(instrumento: Instrumento) {
    this.httpService.create(instrumento).subscribe(
      response => {
        this.instrumentos.push(response);
      },
      error => {
        alert('Ocurrió un error al agregar instrumento');
      }
    );
  }

  update(instrumento: Instrumento) {
    this.httpService.update(instrumento.id, instrumento).subscribe(
      response => {
        alert('Instrumento actualizado con éxito!');
        this.tabla.instrumentos.filter(item => {
          if (item.id === instrumento.id) {
            const idex = this.tabla.instrumentos.indexOf(item);
            this.tabla.instrumentos.splice(idex, 1, response);
          }
        });
      },
      error => {
        alert('Ocurrió un error al actualizar instrumento');
      });
  }

  handleFileInput(files: FileList) {
    this.instrumentoActual.imagen = files.item(0).name;
    const data: FormData = new FormData();
    data.append('file', files.item(0));
    this.httpService.uploadFile(data).subscribe(
      response => {
        alert('Imagen cargada con éxito');
      }, error => {
        alert('Ocurrió un error al cargar la imagen, intenta nuevamente.');
        this.instrumentoActual.imagen = '';
        console.log(error);
      });
  }

  onClose(formInstrumento: NgForm): void {
    this.instrumentoActual = {
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
    formInstrumento.resetForm(this.instrumentoActual);
  }

  onCloseAlert() {
    this.isError = false;
  }

}
