import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Instrumento } from 'src/app/shared/models/instrumento';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public instrumentos: Instrumento[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAllInstrumentos();
  }

  getAllInstrumentos() {
    this.httpService.getAll().subscribe(
      response => {
        this.instrumentos = response;
      }, error => {
        console.log(error.message);
      });
  }

}
