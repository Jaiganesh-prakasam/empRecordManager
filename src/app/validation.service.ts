import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
    // age abbe 18 or below 80
    static ageValidator(): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} | null => {
        const dob = new Date(control.value);
        const diffMs = Date.now() - dob.getTime();
        const  ageDt = new Date(diffMs);
        const age = Math.abs(ageDt.getUTCFullYear() - 1970);
        console.log(age > 18 && age < 80);
        return age > 18 && age < 80 ? {invalidAge: true} : null;
      };
    }
  public getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'Required',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }
}
