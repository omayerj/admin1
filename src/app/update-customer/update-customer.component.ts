import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.webapiService.currentMessage.subscribe(customer => this.customer = customer)
    console.log("customer Update");
    console.log(this.customer);
  }
  UpdateButton(){
    console.log("UpdateButton");
    console.log(this.customer);
    this.webapiService.updateCustomer(this.customer).subscribe(customer => {
      console.log(this.customer);
    });
  }
}