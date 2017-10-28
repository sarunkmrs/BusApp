import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { JourneyInfoComponent } from './journey/journey.component';
import { RoutesInfoComponent } from './routes/routes.component';
import { OperatorInfoComponent } from './operator/operator.component';
import { GeneralInfoComponent } from './general/general.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        children: [
          { path: '', component: HomeComponent },
          { path: 'journey', component: JourneyInfoComponent },
          { path: 'routes', component: RoutesInfoComponent },
          { path: 'operator', component: OperatorInfoComponent },
          { path: 'general', component: GeneralInfoComponent },
          // { path: 'analytics', loadChildren: AnalyticsRoutingModule }
        ]
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
