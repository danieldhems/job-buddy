import Alt from "../alt";
import AbstractActions from  "../actions/AbstractActions";

class AbstractStore {
  constructor(){
    this.items = [];
    this.bindListeners(){
      handleUpdateAbstracts: AbstractActions.UPDATE
    }
  }
  handleUpdate(items){
    this.items = items;
  }
}

export default Alt.createStore(AbstractStore, 'AbstractStore');
