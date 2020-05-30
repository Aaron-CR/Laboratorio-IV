import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instrumento } from 'src/app/shared/models/instrumento';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private jsonURL = 'assets/instrumentos.json';
  public instrumentos: Array<Instrumento>;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.instrumentos = data.instrumentos;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  ngOnInit(): void {

  }

}
