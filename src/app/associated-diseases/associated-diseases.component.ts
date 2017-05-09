import {
    Component, OnInit, Input, EventEmitter, OnChanges, SimpleChanges, OnDestroy,
    ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ValidateOptions} from 'mrd-ui-components';
import {Subscription, Observable} from 'rxjs';
import {EhrModelObservable} from 'thinkehr-forms';
import {CustomModel} from 'thinkehr-forms';
import {EhrFormCustomComponent} from 'thinkehr-forms';
import {QuantityFieldModel} from 'thinkehr-forms';

@Component({
    selector: 'asc-dis',
    templateUrl: './associated-diseases.component.html',
    styleUrls: ['./associated-diseases.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssociatedDiseasesComponent implements OnDestroy, EhrFormCustomComponent {

    @Input()
    set model(value: CustomModel) {
        this.modelValue$ = null;
        this.unsubscribeAll();
        this.connectValues(value);
        this._model = value;

    }

    get model(): CustomModel {
        return this._model;
    }

    private _model: CustomModel;

    @Input()
    ehrFormGroup: FormGroup;

    @Input()
    validateFormEvent: EventEmitter<ValidateOptions>;

    protected connectValues(customModel: CustomModel): void {

    }

    valuesArray = ["PULMONARY HYPERTENSION",
        "DIABETES TYPE I", "DIABETES TYPE II", "CHRONIC KIDNEY DISEASE", "LIVER DISEASE", "ULCER DISEASE", "CHOLECYSTOLITHIASIS", "INFLAMMATORY BOWEL DISEASE", "DIVERTICULOSIS", "CHRONIC PANCREATITIS", "PERIPHERAL ARTERIAL OCCULUSIVE DISEASE", "ULCER DISEASE OF THE STOMACH/DUODENUM", "CEREBROVASCULAR DISEASE", "COPD", "BRONCHITIS",
        "ASTHMA", "CONDITION AFTER TUBERCULOSIS", "MALIGNANCIES", "ENDOCRINOLOGICAL DISEASES", "PSYCHIATRIC DISORDERS", "OTHER DISEASES"];

    modelValue$: Observable<string>;

    protected modelSubscriptions: Subscription[] = [];

    constructor(private changeDetectorRef: ChangeDetectorRef, private ehrModelObservable: EhrModelObservable) {
    }

    ngOnDestroy() {
        this.unsubscribeAll();
    }

    private unsubscribeAll() {
        this.modelSubscriptions.forEach((subs: Subscription) => {
            subs.unsubscribe();
        });
        this.modelSubscriptions = [];
    }


    styleBmi(value): void {

    }
}
