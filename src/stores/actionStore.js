import { observable , action , computed } from 'mobx'
import { testList } from './mockActions'

class ActionLogStore {
  @observable actionLog = testList

  @action
  addAction(action){
    this.actionLog = [...this.actionLog , action ];
  }

  @computed get log(){
    return this.actionLog.slice(-30)
  }
}

export default ActionLogStore
