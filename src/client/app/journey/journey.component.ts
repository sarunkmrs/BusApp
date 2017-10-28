import { Component, OnInit } from '@angular/core';
import { JourneyService } from './journey.service';
// import { Ng2MapModule } from 'ng2-map';

@Component({
  moduleId: module.id,
  selector: 'sd-journey',
  templateUrl: 'journey.component.html',
  styleUrls: ['journey.component.css']
})
export class JourneyInfoComponent implements OnInit {
  public stopIDFullList: any = {};
  public stopShortNameList: Object = {};
  public listOfSubStops: any = [];
  public stopName: string = '';
  public operatorName: string = '';
  public routeList: Object = {};
  public stopId: string = '';
  public stopError: string = '';
  public errorSublist: string = '';

  public constructor(private journeyService: JourneyService) {
    console.log('hiiii');
  }

  ngOnInit() {
    this.getStopsList();
  }

  public getStopsList() {
    this.stopIDFullList = {};
    this.stopError = '';

    let postData = (this.stopId) ? `?stopid=${this.stopId}&stopname=&format=` : '?stopid=&stopname=&format=';
    this.journeyService.getStodIdList(postData).subscribe((data: any) => {
      console.log(data);
      this.stopIDFullList = data.results;
      this.stopShortNameList = this.getUniqueStopname(data.results);
      console.log(this.stopShortNameList);
    }, (error: any) => { console.log('error' + error); this.stopError = 'Stop Information not available'; });
  }

  public getUniqueStopname(dataSet: any) {
    let resultSet: String[] = [];
    var flags = [], l = dataSet.length, i;

    for (i = 0; i < l; i++) {
      if (flags[dataSet[i].shortname]) continue;
      flags[dataSet[i].shortname] = true;
      resultSet.push(dataSet[i].shortname);
    }
    return resultSet;
  }

  public getStopList() {
    let stopName = this.stopName;
    this.listOfSubStops = [];
    var listOfSubStops: any = [];

    this.stopIDFullList.forEach(function (arrayItem: any) {
      if (arrayItem.shortname.trim() === stopName.trim()) {
        listOfSubStops.push(arrayItem);
      }
    });

    this.listOfSubStops = listOfSubStops;
    if (this.listOfSubStops.length === 0) {
      this.errorSublist = 'No Info Available';
    }
    console.log(this.listOfSubStops);
  }
}
