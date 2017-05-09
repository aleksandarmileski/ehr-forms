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
  selector: 'bmi-simple',
  templateUrl: './bmi-simple.component.html',
  styleUrls: ['./bmi-simple.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BmiSimpleComponent implements OnDestroy, EhrFormCustomComponent {

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

    if (customModel) {
      console.log(customModel, "model")
      let targetW: QuantityFieldModel = customModel.findModelWithTag('weight', true) as QuantityFieldModel;
      let targetH: QuantityFieldModel = customModel.findModelWithTag('height', true) as QuantityFieldModel;

      if (targetW && targetH) {
        this.modelValue$ = this.ehrModelObservable.fromValue(customModel.getDelegateModel(), 'magnitudeValue', 0);

        /*///this.modelSubscriptions.push(this.modelValue$.subscribe((val) => {
         this.changeDetectorRef.markForCheck();
         })
         );*/

        let weight$: Observable<string> = this.ehrModelObservable.fromValue(targetW, 'magnitudeValue', 0);

        this.modelSubscriptions.push(this.ehrModelObservable.fromValue(targetH, 'magnitudeValue', 0).combineLatest(weight$).subscribe((heightWeightArr) => {
            let bmiValStr: string = this.calcBMI(heightWeightArr[0], heightWeightArr[1]);
            customModel.getDelegateModel().magnitudeValue(bmiValStr, 0);
          })
        );
      }
    }
  }

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

  private calcBMI(heightValue: string, weightValue: string) {
    let hVal: number, wVal: number;
    let bmiVal: string = '';
    if (heightValue) {
      hVal = parseInt(heightValue, 10);
    }
    if (weightValue) {
      wVal = parseInt(weightValue, 10);
    }

    if (hVal && wVal) {
      var bmiRaw = wVal * 10000 / hVal / hVal;
      bmiVal = (Math.round(bmiRaw * 100) / 100).toString();
    }
    return bmiVal;
  }

  styleBmi(value): string {
    switch (true) {
      case (value == undefined):
        return '';
      case (value <= 18.5):
        return 'underweight';
      case (value > 18.5 && value < 25 ):
        return 'normal';
      case (value >= 25 && value < 30) :
        return 'overweight';
      case (value > 30) :
        return 'obese';
      default :
        return '';
    }
  }
}
