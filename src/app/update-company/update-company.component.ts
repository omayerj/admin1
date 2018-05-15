import { Component, OnInit } from '@angular/core';
import { companyCreate } from '../create-company/create-company.component';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  company;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.webapiService.currentMessage.subscribe(company => this.company = company)
    console.log("company Update");
    console.log(this.company);
  }
  UpdateButton(){
    console.log("UpdateButton");
    console.log(this.company);
    this.webapiService.updateCompany(this.company).subscribe(company => {
      console.log(this.company);
    });
  }
}
