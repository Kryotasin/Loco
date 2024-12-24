import { jwtDecode } from "jwt-decode";

const jwtExpired = (token: string) => {
    const jwtDecoded = jwtDecode(token);

    if (jwtDecoded.hasOwnProperty('exp') && (jwtDecoded.exp < Date.now() / 1000)) {
        return true;
    }
    return false;
}

export { jwtExpired };