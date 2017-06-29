import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EhrFormComponentsModule, EhrFormModelModule, EhrFormService, TerminologyService} from 'thinkehr-forms';
// import EhrFormCustomComponentsModule for custom components
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BmiSimpleComponent} from "./bmi-simple/bmi-simple.component";
import {BasicService} from "./basic.service";
import {TempCalculatorComponent} from './temp-calculator/temp-calculator.component';
import {Das28Component} from './das28/das28.component';
import {MainDiagnosisComponent} from './main-diagnosis-component/main-diagnosis-component.component';
import {GeneralStatusComponent} from './general-status/general-status.component';
import {AllergiesComponent} from './allergies/allergies.component';
import {SocialAnamesisComponent} from './social-anamesis/social-anamesis.component';
import {AssociatedDiseasesComponent} from './associated-diseases/associated-diseases.component';
import {ProceduresComponent} from './procedures/procedures.component';
import {AlchoholUseComponent} from './alchohol-use/alchohol-use.component';
import {TobaccoUseComponent} from './tobacco-use/tobacco-use.component';
import {ArrhythmiaComponent} from './arrhythmia/arrhythmia.component';
// import {AuthService} from './auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    EhrFormModelModule,
    EhrFormComponentsModule.forRoot({
      terminologyLoaderService: TerminologyService
    })
  ],
  providers: [EhrFormService, TerminologyService, BasicService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
