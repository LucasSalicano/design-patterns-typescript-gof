// Chain of Responsibility

import Server from "./servers/Server";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";

const server = new Server();
const middleware = new CheckPermissionMiddleware();
middleware.linkWith(new CheckUserMiddleware());

server.setMiddleware(middleware);
server.login('test@test.com', '123');
