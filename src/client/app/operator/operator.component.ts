import { Component, OnInit } from '@angular/core';
import { OperatorService } from './operator.service';

@Component({
  moduleId: module.id,
  selector: 'sd-operator',
  templateUrl: 'operator.component.html',
  styleUrls: ['operator.component.css']
})
export class OperatorInfoComponent implements OnInit { 

  public operatorList: Object = {};
  public errorOperator: string = '';
  public errorMessage: string= '';

  public constructor(private opeatorService: OperatorService) {
    console.log('yes here');
  }

  ngOnInit() {
    this.initOperators();
  }

  /**
   * Getting Operator information
   */
  public initOperators() {
    this.opeatorService.getOperatorDetails().subscribe((data: any) => {
      console.log(data);
      this.operatorList = data.results;
      console.log(this.operatorList);
      if (Object.keys(this.operatorList).length === 0) {
        this.errorOperator = 'No Operator Available';
      }
    }, (error: any) => { console.log('error : ' + error); this.errorMessage = 'No Operator Available'; });
  }
}
