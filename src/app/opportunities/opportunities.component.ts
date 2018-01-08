import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {OpportunitiesService} from '../opportunities.service';
import { FormsModule,FormControl,FormGroup,FormBuilder,FormArray } from '@angular/forms';
 @Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  sub;
  limit=true;
  len=0;
  pageNum:number;
  allOpps;
  myModel:FormGroup;
  items:FormArray;
  skillsOptions:any;
  backgroundsOption:any;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private opportunitiesService:OpportunitiesService,
    private formBuilder:FormBuilder) {

    }
  ngOnInit() {
    console.log(this._Activatedroute);
    this.pageNum = this._Activatedroute.snapshot.params.pageNum;
     console.log('Query params ',this.pageNum);
     this.opportunitiesService.getOpp(this.pageNum).subscribe(res=>{
      this.allOpps=res;
      console.log(this.allOpps);
        });
      this.opportunitiesService.getbackgroundsList().subscribe(res=>{
        this.backgroundsOption=res;
        console.log(this.backgroundsOption);
          });
      this.opportunitiesService.getSkillsList().subscribe(res=>{
        this.skillsOptions=res;
        console.log(this.skillsOptions);
          });
        this.myModel=new FormGroup({
          title: new FormControl(''),
         backgrounds:this.formBuilder.array([ this.onCreateLayOut() ]),
         skills:this.formBuilder.array([ this.onCreateLayOut() ]),
        role_info:new FormGroup({
          city:new FormControl(''),
        }),
        applications_close_date:new FormControl(''),
        earliest_start_date:new FormControl(''),
        latest_end_date:new FormControl(''),
        description:new FormControl(''),
        selection_process:new FormControl(''),
        salary:new FormControl(''),
        });
      } 
      onAddBackground():void{
        this.len++==1?this.limit=false:"";
        this.items = this.myModel.get('backgrounds') as FormArray;      
        this.items.push(this.onCreateLayOut());
      }
      onAddSkill():void{
        this.items = this.myModel.get('skills') as FormArray;
        this.items.push(this.onCreateLayOut());
      }
      onCreateLayOut(){
        return this.formBuilder.group({
          id:'',  
          name:'',
          option:''
        })
      }
      backgroundChange(event,id){
        
        let temp:any;
        //this.myModel.get("backgrounds").[id]._value.name=event.target.selectedOptions[0].text
        temp=this.myModel.getRawValue();
        temp.backgrounds[id].name=event.target.selectedOptions[0].text;
        this.myModel.setValue(temp);
      }
      skillChange(event,id){
       
        let temp:any;
        //this.myModel.get("backgrounds").[id]._value.name=event.target.selectedOptions[0].text
        temp=this.myModel.getRawValue();
        temp.skills[id].name=event.target.selectedOptions[0].text;
        this.myModel.setValue(temp);
      }
      onSubmit(myModel){
        this.opportunitiesService.saveOpp(myModel);
      }
}

