import { User } from './../interfaces/user.interface';
import { Credentials } from './../interfaces/credentials.interface';

class SignIn {
  userExist(credentials: Credentials, usersList: User[]) {
    const userExist = usersList.find((user: User) => {
      return user.username === credentials.username && user.password === credentials.password;
    });

    return userExist;
  }
}

export let signIn = new SignIn();
