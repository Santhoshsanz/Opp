import { Component, OnInit } from '@angular/core';
import {OpportunitiesService } from '../opportunities.service';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  allOpps:any;
  constructor(private opportunityService:OpportunitiesService, private router:Router) { }

  ngOnInit() {
    console.log("Init Index");
    this.renderAllOpp();
  }
  renderAllOpp(){
    console.log("Call Render");
    this.opportunityService.getAllOpp().subscribe(res=>{
    this.allOpps=res.data;
    console.log(this.allOpps);
      })
  }
goToOpp(num){
   let url=`/opportunities/${num}`;
  //let url="/opportunities/1"
  this.router.navigateByUrl(url);
}
}
