import {
  Component, OnInit, Input, EventEmitter, OnChanges, SimpleChanges, OnDestroy,
  ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, ViewChild
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ValidateOptions} from 'mrd-ui-components';
import {Subscription, Observable} from 'rxjs';
import {EhrModelObservable} from 'thinkehr-forms';
import {CustomModel} from 'thinkehr-forms';
import {EhrFormCustomComponent} from 'thinkehr-forms';
import {QuantityFieldModel} from 'thinkehr-forms';
import {BooleanFieldModel} from 'thinkehr-forms';
import {CodedTextFieldModel} from 'thinkehr-forms';

@Component({
  selector: 'app-das28',
  templateUrl: './das28.component.html',
  styleUrls: ['./das28.component.css']
})
export class Das28Component implements OnDestroy, EhrFormCustomComponent {

  jointLocation: any = ["Shoulder", "Elbow", "Wrist", "MCP1", "MCP2", "MCP3", "MCP4", "MCP5", "PIP1", "PIP2", "PIP3", "PIP4", "PIP5", "Knee"];

  sideJointLocation: any = this.jointLocation.map(joint => {
    return {left: {bolec: false, otecen: false}, right: {bolec: false, otecen: false}}
  });

  bolecCount = 0;
  otecenCount = 0;

  esr;
  crp;

  pga;

  das28;
  das28Status;

  @Input()
  set model(value: CustomModel) {
    this.modelValue$ = null;
    // this.unsubscribeAll();
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
  tender: any;

  protected modelValue$: Observable<string>;

  protected modelSubscriptions: Subscription[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, private ehrModelObservable: EhrModelObservable) {
  }

  func(i, side, status) {
    // console.log(this.jointLocation[i] + " " + side + " " + this.sideJointLocation[i][side][status]);
    this.sideJointLocation[i][side][status] = !this.sideJointLocation[i][side][status];
    // console.log(this.jointLocation[i] + " " + side + " " + this.sideJointLocation[i][side][status]);

    if (status == 'bolec') {
      this.sideJointLocation[i][side][status] == true ? this.bolecCount++ : this.bolecCount--;
    }
    if (status == 'otecen') {
      this.sideJointLocation[i][side][status] == true ? this.otecenCount++ : this.otecenCount--;
    }

    // console.log("Bolec count: " + this.bolecCount + " Otecen count: " + this.otecenCount);
  }

  setPga(value) {
    this.pga = value;
  }

  calculateDas28() {
    if (this.esr != null) {
      this.das28 = 0.56 * Math.sqrt(this.bolecCount) + 0.28 * Math.sqrt(this.otecenCount) + 0.7 * Math.log10(this.esr) + 0.14 * this.pga;
    }
    if (this.crp != null) {
      this.das28 = 0.56 * Math.sqrt(this.bolecCount) + 0.28 * Math.sqrt(this.otecenCount) + 0.36 * Math.log10(this.crp + 1) + 0.14 * this.pga + 0.96;
    }
    switch (true) {
      case (this.das28 < 2.6):
        this.das28Status = 'Remisija';
        break;
      case (this.das28 >= 2.6 && this.das28 < 3.2 ):
        this.das28Status = 'Nizka aktivnost bolezni';
        break;
      case (this.das28 >= 3.2 && this.das28 < 5.1) :
        this.das28Status = 'Srednja aktivnost bolezni';
        break;
      case (this.das28 >= 5.1) :
        this.das28Status = 'Visoka aktivnost bolezni ';
        break;
      default :
        this.das28Status = 'undefined';
        break;
    }
  }

  protected connectValues(customModel: CustomModel): void {

    if (customModel) {

      let tenderBool: BooleanFieldModel = customModel.findModelWithTag('t1', true) as BooleanFieldModel;
      // let elbow: CodedTextFieldModel = customModel.findModelWithTag('elbow', true) as CodedTextFieldModel;
      // console.log(tenderBool, 'whole object')

      let tenderBool$ = this.ehrModelObservable.fromValue(tenderBool, 'booleanValue', 0);
      // let elbow$: Observable<string> = this.ehrModelObservable.fromValue(elbow, 'textValue', 0);

      // let temp: QuantityFieldModel = customModel.findModelWithTag('temperature', true) as QuantityFieldModel;
      // let temp$: Observable<string> = this.ehrModelObservable.fromValue(temp, 'magnitudeValue', 0);
      // this.modelValue$ = this.ehrModelObservable.fromValue(customModel.getDelegateModel(), 'magnitudeValue', 0);

      /*///this.modelSubscriptions.push(this.modelValue$.subscribe((val) => {
       this.changeDetectorRef.markForCheck();
       })
       );*/


      this.modelSubscriptions.push(tenderBool$.subscribe(val => {
        // this.valueTemp = val;
        console.log(val);
        this.changeDetectorRef.detectChanges();

      }));


    }
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

}
