import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    responseAfterLogin({access_token, name}) {
        if (Token.isValid(access_token)) {
            AppStorage.store(access_token, name)
        }
    }

    hasToken() {
        const storeToken = localStorage.getItem('token');
        if (storeToken) {
            return Token.isValid(storeToken) ? true : false;
        }
        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    name() {
        if (this.loggedIn()) {
            return localStorage.getItem('user');
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(localStorage.getItem('user'));
            return payload.sub;
        }
        return false;
    }
}

export default User = new User();
