import { Component, OnInit } from '@angular/core';
import { RoutesService } from './routes.service';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-routes',
  templateUrl: 'routes.component.html',
  styleUrls: ['routes.component.css']
})
export class RoutesInfoComponent implements OnInit {
  public operatorList: Object = {};
  public operator: string = '';
  public errorMessage: string = '';
  public errorRoute: string = '';
  public errorOperator: string = '';
  public routesList: Object = {};

  public constructor(private routesService: RoutesService) {
    console.log('yes here');
  }

  /**
   * Initialize base services
   */
  ngOnInit() {
    this.initOperators();
    this.initRoutesInfo();
  }

  /**
   * Getting Operator information
   */
  public initOperators() {
    this.routesService.getOperatorDetails().subscribe((data: any) => {
      console.log(data);
      this.operatorList = data.results;
      console.log(this.operatorList);
      if (Object.keys(this.operatorList).length === 0) {
        this.errorOperator = 'No Operator Available';
      }
    }, (error: any) => { console.log('error : ' + error); this.errorMessage = 'No Operator Available'; });
  }

  /**
   * Getting Route information
   */
  public initRoutesInfo() {
    console.log(this.operator);
    this.errorRoute = '';
    this.routesList = {};
    let operator = (this.operator) ? `?operator=${this.operator}&format` : '?operator=&format';
    this.routesService.getRoutesDetails(operator).subscribe((data: any) => {
      this.routesList = data.results;

      if (Object.keys(this.routesList).length === 0) {
        this.errorRoute = 'Route information not available for the selected Operator';
      }
    }, (error: any) => { console.log('error : ' + error); this.errorMessage = 'Route information not available for the selected Operator'; });
  }
}
