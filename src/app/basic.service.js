"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var BasicService = (function () {
    function BasicService(http) {
        this.http = http;
        this.baseFormUrl = 'https://rest.ehrscape.com/rest/v1/form';
        this.authorization = "Basic " + btoa("aleksandar.mileski00@gmail.com" + ":" + "watrostusw");
        this.getHeaders = new http_1.Headers({ 'Authorization': this.authorization, 'Content-Type': 'application/json' });
        this.headers = { headers: this.getHeaders };
    }
    BasicService.prototype.getForms = function () {
        return this.http.get(this.baseFormUrl, this.headers)
            .map(function (response) { return response.json(); });
    };
    BasicService.prototype.getForm = function (name, version) {
        return this.http.get(this.baseFormUrl + "/" + name + "/" + version, this.headers)
            .map(function (response) { return response.json(); });
    };
    BasicService.prototype.getFormResource = function (name, version, resource) {
        return this.http.get(this.baseFormUrl + "/" + name + "/" + version + "/resource/" + resource, this.headers)
            .map(function (response) { return response.json(); });
    };
    BasicService.prototype.postComposition = function (body) {
        return this.http.post('https://rest.ehrscape.com/rest/v1/composition?ehrId=ebc47940-91c7-4352-b14a-111d41847b3d&templateId=Allergies&format=STRUCTURED&commiter=Belinda Nurse', body, { headers: this.getHeaders });
    };
    BasicService.prototype.putComposition = function (body) {
        return this.http.put("https://rest.ehrscape.com/rest/v1/composition/48f9e21a-f437-400c-8650-20083ebe6b8b::frontend.ehrscape.dom::1&templateId=Vital Signs&format=FLAT", body, { headers: this.getHeaders });
    };
    return BasicService;
}());
BasicService = __decorate([
    core_1.Injectable()
], BasicService);
exports.BasicService = BasicService;
// {"meta":{"href":"https://rest.ehrscape.com/rest/v1/composition/46aa6ad4-d3d4-4c5a-887d-475aa2015008::frontend.ehrscape.dom::1"},"action":"CREATE","compositionUid":"46aa6ad4-d3d4-4c5a-887d-475aa2015008::frontend.ehrscape.dom::1"}
// {"meta":{"href":"https://rest.ehrscape.com/rest/v1/composition/e3ae829d-a079-45dd-81ba-e5fc3f572492::frontend.ehrscape.dom::1"},"action":"CREATE","compositionUid":"e3ae829d-a079-45dd-81ba-e5fc3f572492::frontend.ehrscape.dom::1"}
// "compositionUid": "cd0621bb-d25a-465a-879a-de865a737bf2::frontend.ehrscape.dom::1"
