import {useReducer,createContext} from 'react'
export const RContext = createContext(null);

const reducerFn = (state, action) => {
    switch(action.type){
      case 'plus':
        return state + action.value;
      case 'minus' : 
        return state - action.value;
      default: return state;//기본값으로 return
    }
  }

const ReducerContext = ({children}) =>{
    const [data,dispatch ] = useReducer(reducerFn,0);

    return(
        <RContext.Provider value = {{data,dispatch}}>
        {children}
        </RContext.Provider>

    )
}


export default ReducerContext


