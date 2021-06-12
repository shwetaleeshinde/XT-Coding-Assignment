import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../Services/spacex.service';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.scss']
})
export class SpacexComponent implements OnInit {

  spacexList:any;
   itemDetails:any
   selectedItem:any
   selectvalue:any
   selectvaluesucess:any
   years:any[]=[ "2006","2007",  "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017","2018", "2019", "2020"];
   value:any[]=["true", "false"];
   filter: Filter=new Filter();
  constructor(private spacexService:SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getspacexData().subscribe(res=>{
      this.spacexList=res;
     // this.filter.Year==this.spacexList[0]?.launch_year;
    },error=>{
        alert("Something went wrong")
    })

    //setting default values
    this.filter.land_success=true;
    this.filter.launch_success=true; 
  }

  getSpacexDataByYear(year)
  {
    this.filter.Year=year;
    this.selectedItem = year; 
    this.spacexService.getSpacexDataByYear(this.filter).subscribe(res=>{
       this.spacexList=res;
      },error=>{
        alert("Something went wrong")
      })
  }
  getSpacexLaunchSucessFilter(value)
  {
    this.filter.launch_success=value;
    this.selectvalue = value;
    this.spacexService.getSpacexLaunchSucessFilter(this.filter).subscribe(res=>{ 
      this.spacexList=res;
    },error=>{ 
      alert("Something went wrong")
    })
  }
  getSpacexLaunchLandFilter(value)
  {
    this.filter.land_success=value;
    this.selectvaluesucess = value;
    this.spacexService.getSpacexLaunchLandFilter(this.filter).subscribe(res=>{ 
      this.spacexList=res;
    },error=>{ 
      alert("Something went wrong")
    })
  }
}
export class Filter {
  Year:number;
  launch_success:boolean;
  land_success:boolean;
}