export class Opportunities{
    title:string;
    applications_close_date:Date;
    earliest_start_date:Date;
    latest_end_date:Date;
    description:string;
    backgrounds :[{
        id:number,
        name:string
    }];
    skills:[{
        id:number,
        name:string
    }];
    selection_process:string
    salary:number
    role_info:{
        city:string
    }
}
