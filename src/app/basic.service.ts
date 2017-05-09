import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class BasicService {

  private baseFormUrl = 'https://rest.ehrscape.com/rest/v1/form';
  private authorization = "Basic " + btoa("aleksandar.mileski00@gmail.com" + ":" + "watrostusw");
  private getHeaders: Headers = new Headers({'Authorization': this.authorization, 'Content-Type': 'application/json'});
  private headers = {headers: this.getHeaders};

  constructor(private http: Http) {
  }

  getForms() {
    return this.http.get(this.baseFormUrl, this.headers)
      .map(response => response.json());
  }

  getForm(name, version) {
    return this.http.get(this.baseFormUrl + "/" + name + "/" + version, this.headers)
      .map(response => response.json());
  }

  getFormResource(name, version, resource) {
    return this.http.get(this.baseFormUrl + "/" + name + "/" + version + "/resource/" + resource, this.headers)
      .map(response => response.json());
  }

  postComposition(body) {
    return this.http.post('https://rest.ehrscape.com/rest/v1/composition?ehrId=ebc47940-91c7-4352-b14a-111d41847b3d&templateId=Allergies&format=STRUCTURED&commiter=Belinda Nurse',
      body,
      {headers: this.getHeaders})
  }

  putComposition(body) {
    return this.http.put(`https://rest.ehrscape.com/rest/v1/composition/48f9e21a-f437-400c-8650-20083ebe6b8b::frontend.ehrscape.dom::1&templateId=Vital Signs&format=FLAT`,
      body,
      {headers: this.getHeaders})
  }

}

// {"meta":{"href":"https://rest.ehrscape.com/rest/v1/composition/46aa6ad4-d3d4-4c5a-887d-475aa2015008::frontend.ehrscape.dom::1"},"action":"CREATE","compositionUid":"46aa6ad4-d3d4-4c5a-887d-475aa2015008::frontend.ehrscape.dom::1"}
// {"meta":{"href":"https://rest.ehrscape.com/rest/v1/composition/e3ae829d-a079-45dd-81ba-e5fc3f572492::frontend.ehrscape.dom::1"},"action":"CREATE","compositionUid":"e3ae829d-a079-45dd-81ba-e5fc3f572492::frontend.ehrscape.dom::1"}
// "compositionUid": "cd0621bb-d25a-465a-879a-de865a737bf2::frontend.ehrscape.dom::1"
