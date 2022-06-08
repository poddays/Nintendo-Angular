import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  hero='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_1500/v1/ncom/en_US/merchandising/center-stage-banner/Mario%20Strikers%20Battle%20league/Ncom_3600x1300_desktop-2'
 
 
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
