"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var thinkehr_forms_1 = require("thinkehr-forms");
// import EhrFormCustomComponentsModule for custom components
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var bmi_simple_component_1 = require("./bmi-simple/bmi-simple.component");
var basic_service_1 = require("./basic.service");
// import {AuthService} from './auth.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            thinkehr_forms_1.EhrFormModelModule,
            thinkehr_forms_1.EhrFormComponentsModule.forRoot({
                terminologyLoaderService: thinkehr_forms_1.TerminologyService,
                customComponentsMap: { 'bmiCalc': bmi_simple_component_1.BmiSimpleComponent }
            })
        ],
        providers: [thinkehr_forms_1.EhrFormService, thinkehr_forms_1.TerminologyService, basic_service_1.BasicService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
