import Middleware from "./Middleware";
import DataBase from "../servers/DataBase";
import {PermissionType} from "../servers/PermissionType";

export default class CheckPermissionMiddleware extends Middleware {
    check(email: string, password: string): boolean {
        const users = DataBase.filter(item => item.email === email);

        if (!users.length) {
            console.log('User not found.');
            return false;
        }

        if (users[0].permission === PermissionType.ADMIN) {
            console.log('Welcome ADMIN');
            return true;
        }

        console.log('Welcome!');

        return this.checkNext(email, password);
    }
}
