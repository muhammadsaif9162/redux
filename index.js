const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

//creating actions
const ACCESS_TOKEN = 'ACCESS_TOKEN'
const REFRESH_TOKEN = 'REFRESH_TOKEN'

//new values to store
const newAccessToken = 'fuiffdufggpnafbufgdgsvbgbbdfbuogvaionacnaofafgaegoagioagagcb'
const newRefreshToken = 'koghnjnjjjghygsybvcgaseSQDTBBGJBUBNODBBBnfgnfohbsrbobbvpsib'

//inital states
const initialAccesTokenState = {
    token : ''
}
const initialRefreshTokenState = {
    token : ''
}

//redux action handlers
function accessToken(){
    return {
        type : ACCESS_TOKEN
    }
}
function refreshToken(){
    return {
        type : REFRESH_TOKEN
    }
}

//redux reducers
const reducerAccess=(state=initialAccesTokenState, action)=>{
    switch(action.type){
        case ACCESS_TOKEN : return {
            token : newAccessToken
        }
        default : return state
    }
}
const reducerRefresh=(state=initialRefreshTokenState, action)=>{
    switch(action.type){
        case REFRESH_TOKEN : return {
            token : newRefreshToken
        }
        default : return state
    }
}

//combining reducers
const combinedReducer = combineReducers({
    accessToken : reducerAccess,
    refreshToken : reducerRefresh
})
//creating stores
const store = createStore(combinedReducer)
//printing initial states
console.log('initial state', store.getState());
//for printing updated states
const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
//taking action
store.dispatch(accessToken())
store.dispatch(refreshToken())
unsubscribe()