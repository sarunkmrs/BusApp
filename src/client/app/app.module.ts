import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { Ng2MapModule } from 'ng2-map';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { JourneyInfoComponent } from './journey/journey.component';
import { RoutesInfoComponent } from './routes/routes.component';
import { OperatorInfoComponent } from './operator/operator.component';
import { GeneralInfoComponent } from './general/general.component';

import { RoutesService } from './routes/routes.service';
import { OperatorService } from './operator/operator.service';
import { JourneyService } from './journey/journey.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    // Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=MY_GOOGLE_API_KEY'}),
    SharedModule.forRoot()],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    JourneyInfoComponent,
    RoutesInfoComponent,
    OperatorInfoComponent,
    GeneralInfoComponent
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, RoutesService, OperatorService, JourneyService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
