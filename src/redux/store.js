

import reducer from './reducer/reducer'

import {createStore} from 'redux'

if(reducer === undefined){
  console.log('====================================');
  console.log();
  console.log('====================================');
}
const store = createStore(reducer);

export default store;