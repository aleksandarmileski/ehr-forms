import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EhrFormComponentsModule, EhrFormModelModule, EhrFormService, TerminologyService} from 'thinkehr-forms';
// import EhrFormCustomComponentsModule for custom components
import {AppComponent} from '../app/Components/app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BasicService} from "../app/services/basic.service";
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
