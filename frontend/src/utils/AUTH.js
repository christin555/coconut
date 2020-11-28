import axios from "axios";
import jwt_decode from "jwt-decode";

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    try {
        const exp = jwt_decode(localStorage.token).exp;
        if (exp < (new Date() / 1000)) {
            return false;
        }
    } catch (err) {
        return false;
    }
    return true;
}


export default axios.create({
    baseURL: "http://localhost:3001/auth/",
    responseType: "json"
});
