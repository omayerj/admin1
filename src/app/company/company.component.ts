import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.webapiService.currentMessage.subscribe(company => {
      this.webapiService.getCompanyById(company).subscribe(companyByID => {
        this.company=companyByID;
        console.log('companyByID {}',companyByID);
      });
    })
  

  }

}
