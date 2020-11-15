import {observable} from 'mobx';

class UserStore {
    @observable user;

    constructor() {
        this.user = "Dss";
    }
}

export default new UserStore();
