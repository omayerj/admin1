import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WebapiService {
  readonly rootUrl = 'http://localhost:8080/';
  constructor(private http: Http) {
    console.log('webAPI run ....');
  }
  private messageSource = new BehaviorSubject<string>("null");
  currentMessage = this.messageSource.asObservable();
  getcoupons() {
    return this.http.get(this.rootUrl + 'api/companyres/getcoupons').map(res => res.json());
  }
  getCompany() {
    return this.http.get(this.rootUrl + 'api/companyres/Company').map(res => res.json());
  }
  getMaxPriceFromCopany(MaxPrice) {
    return this.http.get(this.rootUrl + 'api/companyres/less?MaxPrice=' + MaxPrice).map(res => res.json());
  }
  getByEndDate(EndDate) {
    return this.http.get(this.rootUrl + 'api/companyresGet/?getCouponByEndDate=' + EndDate).map(res => res.json());
  }
  getByType(Type) {
    return this.http.get(this.rootUrl + 'api/companyres/?getCouponByType='+Type).map(res => res.json());
  }

  createCoupon(Coupon) {
    return this.http.post(this.rootUrl + 'api/companyres/createCoupon', Coupon).map(res => res.json());
  }
  logout() {
    return this.http.post(this.rootUrl + 'api/logout', null).map(res => res.json());
  }
  removeCoupoun(Coupon) {

    return this.http.post(this.rootUrl + 'api/companyres/removeCoupoun', Coupon).map(res => res.json());
  }
  updateCoupon(Coupon) {
   
    return this.http.put(this.rootUrl + 'api/companyres/updateCoupon', Coupon).map(res => res.json());
  }

  CreateCompany(Company) {
    return this.http.post(this.rootUrl + 'api/administratorRes/createCompany', Company).map(res => res.json());
  }
  CreateCustomer(Customer) {
    return this.http.post(this.rootUrl + 'api/administratorRes/createCustomrer', Customer).map(res => res.json());
  }
  getCompanies() {
    return this.http.get(this.rootUrl + 'api/administratorRes/getAllCompanys').map(res => res.json());
  }
  getCustomers() {
    return this.http.get(this.rootUrl + 'api/administratorRes/getAllCustomrers').map(res => res.json());
  }
  getCompanyById(Id) {
    return this.http.get(this.rootUrl + 'api/administratorRes/Company?companyId='+Id.id).map(res => res.json());
  }
  getCustomerByID(Id) {
    return this.http.get(this.rootUrl + 'api/administratorRes/Customrer?customrerId='+Id.id).map(res => res.json());
  }
  removeCompany(Company) {
    return this.http.post(this.rootUrl + 'api/administratorRes/removeCompany', Company).map(res => res.json());
  }
  removeCustomer (Customer ) {
    return this.http.post(this.rootUrl + 'api/administratorRes/removeCustomrer', Customer).map(res => res.json());
  }
  updateCompany(Company) {
   
    return this.http.put(this.rootUrl + 'api/administratorRes/updateCompany', Company).map(res => res.json());
  }
  updateCustomer(Customer) {
   
    return this.http.put(this.rootUrl + 'api/administratorRes/updateCustomrer', Customer).map(res => res.json());
  }

  changeMessage(message) {
    this.messageSource.next(message)
  }

}
