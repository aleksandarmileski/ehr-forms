import {Component, OnChanges, OnInit, ViewChild, ChangeDetectorRef, NgZone} from '@angular/core';
import {forma} from "./form"
import {BasicService} from "./basic.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    form = forma;
    @ViewChild('renderer')
    renderer;
    activeTempUid: String = '';
    activeCompUid: String = '';
    forms: any = [];
    vH: any;
    formDescription: any = '';
    values: any = {};
    shouldRender = false;
    @ViewChild('activatedCompUid') activatedCompUid;
    formConfigX: { description: any, layout?: any, values?: any, context?: any };
    private tName: any = '';
    private compUid;
    private compositionHasTags = false;
    private activeCompositionTags;

    constructor(private basicService: BasicService) {
    }
    ngOnInit() {
        this.basicService.getForms()
            .subscribe(response => {
                this.vH = response['forms'][0].name;
                this.forms.push(response['forms'][0]);
                response['forms'].forEach(form => {
                    if (form.name != this.vH) {
                        this.vH = form.name;
                        this.forms.push(form);
                    }
                })
            });
    }
    getFormBlank(name) {
        this.activeTempUid = name;
        console.log(this.activeTempUid, 'tempid')
    }
    getForm(name, version, compositionData) {
        this.tName = name;
        this.basicService.getForm(name, version)
            .subscribe(response => {
                this.activeTempUid = response.form.templateId;
                this.basicService.getFormResource(name, version, "form-description")
                    .subscribe(desc => {
                        this.basicService.getFormResource(name, version, "form-layout")
                            .subscribe(layout => {
                                    this.formConfigX = {
                                        description: desc, layout: layout, values: compositionData
                                    };
                            });
                    });
            })
    }
    postComposition() {
        console.log(this.values)
        this.basicService.postComposition(this.tName, {
            "ctx/time": "2014-3-19T13:10Z",
            "ctx/language": "en",
            "ctx/territory": "CA",
            [Object.keys(this.formConfigX.values)[0]]: this.formConfigX.values[Object.keys(this.formConfigX.values)[0]]
        })
            .subscribe(console.log);
    }
    putComposition() {
        this.basicService.putComposition(this.activeCompUid, this.activeTempUid, {
            [Object.keys(this.formConfigX.values)[0]]: this.formConfigX.values[Object.keys(this.formConfigX.values)[0]]
        })
            .subscribe(console.log);
        console.log(this.formConfigX.values[Object.keys(this.formConfigX.values)[0]], "LOL")
    }
    createEhr() {
        this.basicService.createEhr().subscribe(console.log);
    }
    getAllCompositionsByTempId() {
        let realAql = `select a/archetype_details/template_id, a from EHR e contains COMPOSITION a WHERE a/archetype_details/template_id = '${this.activeTempUid}' offset 0 limit 100`
        this.basicService.getAllCompositionsByTempId(realAql)
            .map(data => {
                return data.resultSet.map(uid => uid['#1'].uid.value)
            })
            .subscribe(data => this.compUid = data)
    }
    renderByCompUid(uid) {
        this.basicService.getCompositionTagByUid(uid)
            .subscribe(response => {
                response == null
                    ? this.compositionHasTags = false
                    : this.setActiveTags(response.tags, uid);
                console.log(this.compositionHasTags)
                this.activeCompUid = uid;
            })
    }

    setActiveTags(tags, uid) {
        this.compositionHasTags = true;
        this.activeCompositionTags = {'version': tags["0"].tag, 'template': tags["1"].tag};
        console.log(this.activeCompositionTags)
        this.shouldRender = true;
        this.basicService.getComposition(uid)
            .subscribe(response => {
                this.getForm(this.activeCompositionTags.template, this.activeCompositionTags.version, response.composition);
            })
    }
}
