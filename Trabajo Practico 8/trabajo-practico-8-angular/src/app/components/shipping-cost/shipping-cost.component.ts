import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-cost',
  templateUrl: './shipping-cost.component.html',
  styleUrls: ['./shipping-cost.component.scss']
})
export class ShippingCostComponent implements OnInit {

  @Input()
  public cost: any;

  constructor() { }

  ngOnInit(): void {
  }

}
