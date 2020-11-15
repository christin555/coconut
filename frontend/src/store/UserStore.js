import {observable} from 'mobx';

class UserStore {
    @observable user;

    constructor() {
        this.user = "Dss";
    }
}

const userStore = new UserStore();

export default userStore;
export { UserStore };
