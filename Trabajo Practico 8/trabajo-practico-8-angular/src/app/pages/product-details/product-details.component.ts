import { Component, OnInit } from '@angular/core';
import { Instrumento } from 'src/app/shared/models/instrumento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private jsonURL = 'assets/instrumentos.json';
  public instrumento: Instrumento;
  public id;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getJSON().subscribe(data => {
      this.instrumento = data.instrumentos[this.id - 1];
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  ngOnInit(): void {
  }

}
