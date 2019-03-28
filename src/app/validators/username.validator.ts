import { User } from './../interfaces/user.interface';
import {  AbstractControl, ValidatorFn } from '@angular/forms';

export function UsernameValidator(usersList: User[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const userExist = usersList.find((user: User) => {
        return user.username === control.value;
    });
    return userExist !== null ? {sameUsername: control.value} : null;
  };
}
