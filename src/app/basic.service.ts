import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class BasicService {

  private baseFormUrl = 'https://rest.ehrscape.com/rest/v1/form';
  private authorization = "Basic " + btoa("melanoma" + ":" + "melanoma");
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
    return this.http.post('https://rest.ehrscape.com/rest/v1/composition?ehrId=1c536511-6b54-4066-a2af-6718f2e9bdfd&templateId=Melanoma Features&format=STRUCTURED&commiter=Belinda Nurse',
      body,
      {headers: this.getHeaders})
  }

  putComposition(body) {
    return this.http.put(`https://rest.ehrscape.com/rest/v1/composition/4c6b86c3-3ae6-4687-bda4-0d6187283144::melanoma.ehrscape.com::1&format=STRUCTURED&templateId=Melanoma Features`,
      body,
      {headers: this.getHeaders})
  }
  createEhr(){
    let body = {};
    return this.http.post('https://rest.ehrscape.com/rest/v1/ehr', body, this.headers)
  }

}

// {"meta":{"href":"https://rest.ehrscape.com/rest/v1/composition/46aa6ad4-d3d4-4c5a-887d-475aa2015008::frontend.ehrscape.dom::1"},"action":"CREATE","compositionUid":"46aa6ad4-d3d4-4c5a-887d-475aa2015008::frontend.ehrscape.dom::1"}
// {"meta":{"href":"https://rest.ehrscape.com/rest/v1/composition/e3ae829d-a079-45dd-81ba-e5fc3f572492::frontend.ehrscape.dom::1"},"action":"CREATE","compositionUid":"e3ae829d-a079-45dd-81ba-e5fc3f572492::frontend.ehrscape.dom::1"}
// "compositionUid": "cd0621bb-d25a-465a-879a-de865a737bf2::frontend.ehrscape.dom::1"


// NEWEST EHR "{"meta":{"href":"https://rest.ehrscape.com/rest/v1/ehr/1c536511-6b54-4066-a2af-6718f2e9bdfd"},"action":"CREATE","ehrId":"1c536511-6b54-4066-a2af-6718f2e9bdfd"}"
// NEWSST COMP "{"meta":{"href":"https://rest.ehrscape.com/rest/v1/composition/4c6b86c3-3ae6-4687-bda4-0d6187283144::melanoma.ehrscape.com::1"},"action":"CREATE","compositionUid":"4c6b86c3-3ae6-4687-bda4-0d6187283144::melanoma.ehrscape.com::1"}"