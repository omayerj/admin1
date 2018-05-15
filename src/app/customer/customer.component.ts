import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.webapiService.currentMessage.subscribe(customer => {
      this.webapiService.getCustomerByID(customer).subscribe(customerByID => {
        this.customer=customerByID;
        console.log('customerByID {}',customerByID);
      });
    })
  

  }

}
