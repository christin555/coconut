import {action, autorun, makeObservable, toJS, observable} from 'mobx';
import API from "./../utils/API";
import jwt_decode from 'jwt-decode';

class UserStore {
    user = {};
    isCheckedPass = true;
    id='';
    photoPath = '';
    firstName= '';
    secondName= '';
    lastName= '';
    country= '';
    about= '';
    email='';

    oldPassword='';
    newPassword='';
    repeatPassword='';


    constructor() {

        makeObservable(this, {
            id: observable,
            user: observable,
            photoPath: observable,
            firstName: observable,
            secondName: observable,
            lastName: observable,
            country: observable,
            about: observable,
            email: observable,

            oldPassword: observable,
            newPassword: observable,
            repeatPassword: observable,

            isCheckedPass: observable,

            setField: action.bound,
            checkPass: action.bound,
            editUser: action.bound,
            setFields: action.bound
        })
        autorun(this.getUser);
    }

    getUser = async ()=>{
        await API.get('users/getCurrentUser', ).then(res => {
            this.setFields(res.data);
        });
    }

    setUserField(field, value){
        this.user[field] = value;
    }

    setField(field, value){
        this[field] = value;
    }

    setFields(data){
        Object.entries(data).map(([key, value]) => {
            this[key] = value;
            }
        )
    }

    checkPass(){
        if(this.newPassword === this.repeatPassword) this.isCheckedPass = true;
        else this.isCheckedPass = false;
    }

    editUser = async () => {
        const data ={
            photoPath: this.photoPath,
            firstName: this.firstName,
            secondName: this.secondName,
            lastName: this.lastName,
            country: this.country,
            about: this.about,
            oldPassword: this.oldPassword,
            newPassword: this.newPassword
        };
        console.log(toJS(this.user));
        await API.put('users/editUser', data).then(res => {
            this.user = res.data;
        });
    }

}


export default UserStore;
