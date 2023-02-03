import {PermissionType} from "./PermissionType";

interface DataBaseItem {
    email: string;
    password: string;
    permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
    {
        email: 'test@test.com',
        password: '123',
        permission: PermissionType.ADMIN,
    },
    {
        email: 'test2@test.com',
        password: '123',
        permission: PermissionType.USER,
    }
];

export default DataBase;
