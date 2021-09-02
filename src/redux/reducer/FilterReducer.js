
const filter = {
    showAll:true,
    memorized:false, 
    needPractices:false
}

const filterReducer =(state = filter, action)=>{
    if(action.type === 'MEMORIZED'){
        return {  showAll:false,
            memorized:true, 
            needPractices:false}
    }
    if(action.type === 'NEED_PRACTICES'){
        return {  showAll:false,
            memorized:false, 
            needPractices:true}
    }
    if(action.type === 'SHOW_ALL'){
        return {  showAll:true,
            memorized:false, 
            needPractices:false}
    }
   return state;
}
export default filterReducer;