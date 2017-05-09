"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var form_1 = require("./form");
var AppComponent = (function () {
    function AppComponent(basicService) {
        this.basicService = basicService;
        this.form = form_1.forma;
        this.formDescription = '';
        this.values = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basicService.getForms()
            .subscribe(function (response) {
            _this.forms = response['forms'];
        });
    };
    AppComponent.prototype.getForm = function (name, version) {
        var _this = this;
        console.log(name);
        console.log(version);
        this.basicService.getForm(name, version)
            .subscribe(function (response) {
            // console.log(response['form']['resources']);
            // console.log(response['form']['resources'][2]['href']);
            _this.basicService.getFormResource(name, version, "form-description")
                .subscribe(function (response) {
                _this.formDescription = response;
            });
        });
    };
    AppComponent.prototype.postComposition = function () {
        // console.log(this.values.allergies['adverse_reaction_-_allergy.v1'] = this.values.allergies['adverse_reaction_-_allergy']  , 'values');
        console.log(this.values);
        this.basicService.postComposition({
            "ctx/time": "2014-3-19T13:10Z",
            "ctx/language": "en",
            "ctx/territory": "CA",
            "allergies": this.values.allergies
        })
            .subscribe(console.log);
        // console.log(JSON.stringify({
        //   "ctx": {
        //     "language": "en",
        //     "territory": "SI",
        //     "composer_name": "matijak_test"
        //   },
        //   'allergies': this.values
        // }))
    };
    AppComponent.prototype.putComposition = function () {
        this.basicService.putComposition(JSON.stringify({
            "ctx/language": "en",
            "ctx/territory": "CA",
            'allergies': this.values
        }))
            .subscribe(console.log);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('renderer')
], AppComponent.prototype, "renderer", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
