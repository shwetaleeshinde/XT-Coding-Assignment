import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  getspacexData()
  {
    return this.http.get("https://api.spacexdata.com/v3/launches?limit=100") 
  }
  getSpacexDataByYear(filter)
  {
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=1000&launch_success="+filter.launch_success+"&land_success="+filter.land_success+"&launch_year="+filter.Year)
  }
  getSpacexLaunchSucessFilter(filter)
  {

    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+ filter.launch_success)
  }
  getSpacexLaunchLandFilter(filter)
  {

    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+filter.launch_success+ "&land_success="+filter.land_success)
  }
}
