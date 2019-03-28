import { User } from './../interfaces/user.interface';
import {  AbstractControl, ValidatorFn } from '@angular/forms';

export function EmailValidator(usersList: User[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const userExist = usersList.find((user: User) => {
        return user.email === control.value;
    });
    return userExist !== null ? {sameEmail: control.value} : null;
  };
}
