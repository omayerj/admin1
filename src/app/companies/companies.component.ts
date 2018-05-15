import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  Companies:Company[];
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.loadData();
  }
  UpdateButton(event, company) {
    console.log("UpdateButton " + event);
    this.webapiService.changeMessage(company);
  }

  RemoveButton(event, company) {
    console.log("RemoveButton " + event);
    this.webapiService.removeCompany(company).subscribe((res) => {
    });
    this.loadData();
  }

  detailsButton(event, company){
    console.log("RemoveButton " + event);
    console.log("company " + company);
    this.webapiService.changeMessage(company);
    
  }
  loadData() {
    console.log('loadData');
    this.webapiService.getCompanies().subscribe((companies) => {
      console.log(companies);
      this.Companies = companies;
    });
  }
}
export interface Company{
  id: number,
  compName: string,
  password: string,
  email: string
}
