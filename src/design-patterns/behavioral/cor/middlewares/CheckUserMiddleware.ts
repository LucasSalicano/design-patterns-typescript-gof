import Middleware from "./Middleware";
import DataBase from "../servers/DataBase";

export default class CheckUserMiddleware extends Middleware {

    check(email: string, password: string): boolean {
        if (!email.indexOf("@")) {
            console.log('E-mail not valid.');
            return false;
        }

        if (!DataBase.filter(
            item => item.email === email && item.password === password
        ).length) {
            console.log('User not found.');
            return false;
        }

        return this.checkNext(email, password);
    }

}
