import defaultArrWords from '..//DataArrWords'

const arrWordsReducer = (state = defaultArrWords, action) => {
  if (action.type === 'TOGGLE_MEMORIZED') {
    return state.map(e => {
      if (e.id !== action.id) return e;
      return {...e, memorized: !e.memorized};
    });
  }
  if (action.type === 'TOGGLE_SHOW') {
 
    return state.map(e => {
      if (e.id !== action.id) return e;
      return {...e, isShow: !e.isShow};
    });
  }
  if (action.type === 'ADD_WORD') {
    return [
      {
        id: state.length + 1,
        en: action.en,
        vn: action.vn,
        memorized: false,
        isShow: false,
      },
    ].concat(state);
  }
  return state;
};

export default arrWordsReducer;
