import Middleware from "../middlewares/Middleware";

export default class Server {
    private middleware: Middleware;

    setMiddleware(middleware: Middleware): void {
        this.middleware = middleware;
    }

    login(email: string, password: string) {
        if (this.middleware.check(email, password)) {
            console.log('Authenticated user.');
            return true;
        }
        return false
    }
}
