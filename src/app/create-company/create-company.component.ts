import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebapiService } from '../server/webapi.service';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  Company:companyCreate;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.resetCompanyCoupon();
  }

  CreateCompany(){
    this.webapiService.CreateCompany(this.Company).subscribe((res) => {
      console.log(res);

    });
    this.resetCompanyCoupon();
  }
  resetCompanyCoupon(form?: NgForm) {
    if (form != null)
      form.reset();
    this.Company = {
      compName: '',
      password: '',
      email: ''
    }

  }
}
export interface companyCreate {
  compName: string,
  password: string,
  email: string
}