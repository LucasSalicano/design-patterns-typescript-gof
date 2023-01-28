import IDB from "../databases/IDB";
import {Db} from "../enum/Db";
import MySql from "../databases/MySql";

export default class DBFactory {

    private static type: Db = Db.MYSQL;

    public static create(): IDB {
        if (DBFactory.type == Db.MYSQL) {
            return new MySql();
        }

        // return other databases integration
    }
}
