const initialState = {
  comics : []
};
const rootReducer = (store = initialState, action) => {
    if(!arguments.length)
        return store
    switch(action.type){
        case 'ADD_COMICS' : {
            return {...store,comics : [...store.comics,action.payload]}
        }
        default :
            return store
    }
};

export default rootReducer;
