import {autorun, makeObservable, action, observable} from 'mobx';
import AUTH from "./../utils/AUTH";

class AuthStore {
    password =''
    email =''
    firstName=''
    secondName=''
    lastName=''
    country=''
    repeatPassword=''
    loginSuccess = false
    constructor() {
        makeObservable(this, {
            password: observable,
            email:observable,
            firstName:observable,
            secondName:observable,
            lastName:observable,
            country:observable,
            repeatPassword:observable,
            loginSuccess:observable,
            setField: action.bound
        })
    }

    setField(field, value){
        this[field] = value;
    }

    login = async () => {
        await AUTH.post('login', {
            password: this.password,
            email: this.email
        }).then(res => {
            localStorage.setItem("token", res.data.token);
            this.loginSuccess = true;
        });
    }
}



export default AuthStore;

