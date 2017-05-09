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
  selector: 'app-temp-calculator',
  templateUrl: './temp-calculator.component.html',
  styleUrls: ['./temp-calculator.component.css'],

})
export class TempCalculatorComponent implements EhrFormCustomComponent {
  valueTemp: string;

  @Input()
  set model(value: CustomModel) {
    this.modelValue$ = null;
   // this.unsubscribeAll();
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


  protected modelValue$: Observable<string>;

  protected modelSubscriptions: Subscription[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, private ehrModelObservable: EhrModelObservable) {

  }






}
