import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
  }
  logOut(event){
    console.log("logOut " + event);
    
    this.webapiService.logout().subscribe((res) => {
      console.log(res);

    });
  }
}
