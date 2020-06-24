import { Component, OnInit, Input } from '@angular/core';
import { Instrumento } from 'src/app/shared/models/instrumento';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public data: Instrumento;

  constructor() { }

  ngOnInit(): void {
  }

}
