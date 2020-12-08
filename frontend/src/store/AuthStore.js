import {autorun, computed, makeObservable, action, observable} from 'mobx';
import AUTH from "./../utils/AUTH";
import UserStore from "./UserStore";

class AuthStore extends UserStore {
    password =''
    loginSuccess = false

    constructor() {
        super();

        makeObservable(this, {
            password: observable,
            loginSuccess:observable,
            setField: action.bound,
            checkPass: action.bound,
        })
    }

    setField(field, value){
        this[field] = value;
    }

      checkPass(){
        console.log(this.isCheckedPass);
        if(this.password === this.repeatPassword) this.isCheckedPass = true;
        else this.isCheckedPass = false;
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

    auth = async () => {
       if(this.isCheckedPass)
        await AUTH.post('register', {
            password: this.password,
            email: this.email,
            photoPath: this.photoPath,
            firstName: this.firstName,
            secondName: this.secondName,
            lastName: this.lastName,
            country: this.country,
            about: this.about
        }).then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.user.token);
            this.loginSuccess = true;
        });
    }
}



export default AuthStore;

