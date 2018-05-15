import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  Customers:Customer[];
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.loadData();
  }
  UpdateButton(event, customer) {
    console.log("UpdateButton " + event);
    this.webapiService.changeMessage(customer);
  }

  RemoveButton(event, customer) {
    console.log("RemoveButton " + event);
    this.webapiService.removeCustomer(customer).subscribe((res) => {
    });
    this.loadData();
  }

  detailsButton(event, customer){
    console.log("RemoveButton " + event);
    console.log("customer " + customer);
    this.webapiService.changeMessage(customer);
    
  }
  loadData() {
    console.log('loadData');
    this.webapiService.getCustomers().subscribe((customers) => {
      console.log(customers);
      this.Customers = customers;
    });
  }
}
export interface Customer{
  id: number,
  custName: string,
  password: string
}
