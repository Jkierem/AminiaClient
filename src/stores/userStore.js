import { observable , action } from 'mobx'
import { IN , OUT , PENDING , LOGIN_ERROR } from './constants'

const mockFetch = (username , password) => new Promise(function(resolve, reject) {
  if( username === "juan" ){
    resolve({ name: "juan" })
  }else{
    reject({ error: "Invalid username or password"})
  }
});

class UserStore {
  @observable user = {};
  @observable userStatus = OUT;
  @observable error = "";

  @action
  attempLogin(username,password){
    this.userStatus = PENDING;
    mockFetch(username,password)
    .then(this.successfulLogin)
    .catch(this.failedLogin)
  }

  @action.bound
  successfulLogin(user){
    this.user = user;
    this.userStatus = IN;
  }

  @action.bound
  failedLogin({error}){
    this.error = error;
    this.userStatus = LOGIN_ERROR;
  }

  @action
  logout(){
    this.user = {}
    this.userStatus = OUT;
  }

  @action
  setUser(user){
    this.user = user;
    this.userState = IN;
  }
}

export default UserStore
