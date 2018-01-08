import { Injectable } from '@angular/core';
import {Http, Headers,Response,URLSearchParams,RequestOptions } from '@angular/http';
import {Opportunities} from './opportunities/opportunities'

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
export class Layout{
  id:number;
  name:string
}

@Injectable()
export class OpportunitiesService {
oppGetUrl="http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities";
oppGetIndiUrl="http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/";
token="?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c";
backgroundsUrl="http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/lists/backgrounds";
skillsUrl="http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/lists/skills";
options:Layout[];
private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
opportunities:Opportunities;
  constructor(private http:Http) { }
  getAllOpp():Observable<any>{
    return this.http.get(this.oppGetUrl+this.token)
    // ...and calling .json() on the response to return data
     .map((res:Response) => {
       return <any>res.json();
    })
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getOpp(oppId:number):Observable<any>{
    return this.http.get(this.oppGetIndiUrl+oppId+this.token)
    // ...and calling .json() on the response to return data
     .map((res:Response) => {
       return <any>res.json();
    })
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  saveOpp(opportunities){

    let params = new URLSearchParams("");

    for (var key in opportunities.value) {
       if (opportunities.value.hasOwnProperty(key)) {
          params.append(key, opportunities.value[key])
       }
    }

    this.http.post('some url', params,{headers:this.headers} );
  }
  updateOpp(){

  }
  getbackgroundsList():Observable<Layout[]>{
    return this.http.get(this.backgroundsUrl+this.token)
    // ...and calling .json() on the response to return data
     .map((res:Response) => {
       return <Layout[]>res.json();
    })
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getSkillsList(){
    return this.http.get(this.skillsUrl+this.token)
    // ...and calling .json() on the response to return data
     .map((res:Response) => {
       return <Layout[]>res.json();
    })
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
