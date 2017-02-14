import { UserModel } from './user.model';

export class UserService {
    private users: Array<UserModel> = [];

    public addUser(user){
        this.users.push(user);
    }

    public getUserList(): Array<UserModel>{
        return this.users;
    }
}