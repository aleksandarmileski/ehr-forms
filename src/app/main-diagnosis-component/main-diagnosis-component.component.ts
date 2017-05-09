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
  selector: 'main-diag',
  templateUrl: './main-diagnosis-component.component.html',
  styleUrls: ['./main-diagnosis-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainDiagnosisComponent implements OnDestroy, EhrFormCustomComponent {

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
