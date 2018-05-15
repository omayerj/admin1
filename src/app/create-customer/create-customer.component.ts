import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  Customer: customerCreate;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.resetCustomerCoupon();
  }
  CreateCustomer(){
    this.webapiService.CreateCustomer(this.Customer).subscribe((res) => {
      console.log(res);

    });
    this.resetCustomerCoupon();
  }
  resetCustomerCoupon(form?: NgForm) {
    if (form != null)
      form.reset();
    this.Customer = {
      custName: '',
      password: ''
    }

  }

}
export interface customerCreate {
  custName: string,
  password: string
}
