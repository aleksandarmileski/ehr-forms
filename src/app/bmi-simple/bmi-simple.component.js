"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ehr_model_observable_1 = require("../../../node_modules/thinkehr-forms/src/app/ehr-form-model/ehr-model-observable");
var BmiSimpleComponent = (function () {
    function BmiSimpleComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.modelSubscriptions = [];
    }
    Object.defineProperty(BmiSimpleComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this.modelValue$ = null;
            this.unsubscribeAll();
            this.connectValues(value);
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    BmiSimpleComponent.prototype.connectValues = function (customModel) {
        var _this = this;
        if (customModel) {
            var targetW = customModel.findModelWithTag('weight', true);
            var targetH = customModel.findModelWithTag('height', true);
            if (targetW && targetH) {
                this.modelValue$ = ehr_model_observable_1.EhrModelObservable.fromValue(customModel.getDelegateModel(), 'textValue', 0);
                this.modelSubscriptions.push(this.modelValue$.subscribe(function (val) {
                    _this.changeDetectorRef.markForCheck();
                }));
                var w$ = ehr_model_observable_1.EhrModelObservable.fromValue(targetW, 'textValue', 0);
                this.modelSubscriptions.push(ehr_model_observable_1.EhrModelObservable.fromValue(targetH, 'textValue', 0).combineLatest(w$).subscribe(function (val) {
                    console.log(val);
                    var bmiValStr = _this.calcBMI(val[0], val[1]);
                    customModel.getDelegateModel().textValue(bmiValStr);
                }));
            }
        }
    };
    BmiSimpleComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll();
    };
    BmiSimpleComponent.prototype.unsubscribeAll = function () {
        this.modelSubscriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
        this.modelSubscriptions = [];
    };
    BmiSimpleComponent.prototype.calcBMI = function (heightValue, weightValue) {
        var hVal, wVal;
        var bmiVal = '';
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
    };
    return BmiSimpleComponent;
}());
__decorate([
    core_1.Input()
], BmiSimpleComponent.prototype, "model", null);
__decorate([
    core_1.Input()
], BmiSimpleComponent.prototype, "ehrFormGroup", void 0);
__decorate([
    core_1.Input()
], BmiSimpleComponent.prototype, "validateFormEvent", void 0);
BmiSimpleComponent = __decorate([
    core_1.Component({
        selector: 'bmi-simple',
        templateUrl: './bmi-simple.component.html',
        styleUrls: ['./bmi-simple.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], BmiSimpleComponent);
exports.BmiSimpleComponent = BmiSimpleComponent;
