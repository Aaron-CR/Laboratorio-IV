import { Component, OnInit } from '@angular/core';
import { Instrumento } from 'src/app/shared/models/instrumento';
import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public instrumento: Instrumento = {};

  constructor(
    private httpService: HttpService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      if (data.id !== 0) {
        this.getInstrumento(data.id);
      }
    }
    );
  }

  getInstrumento(id: number) {
    this.httpService.getOne(id).subscribe(
      response => {
        this.instrumento = response;
      }, error => {
        console.log(error.message);
      });
  }

}
