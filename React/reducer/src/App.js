import './App.css';
import ReducerContext,{RContext} from './ReducerContext';
import { useReducer, useState } from 'react';

const reducerFn = (state, action) => {
  switch(action.type){
    case 'plus':
      return state + action.value;
    case 'minus' : 
      return state - action.value;
    default: return state;//기본값으로 return
  }
}



function App() {
  const [data, dispatch] = useReducer(reducerFn, 0);
  const [ip, setIp] = useState();

  return (
    <div className='App'>
      <h1>데이터값 = {data} </h1>
      <input type='text' value={ip} onChange={(e) => setIp(e.target.value)} />
      <button onClick={() => dispatch({ type: 'plus', value: ip })}>
        더하기</button> 
        <button onClick={() => dispatch({ type: 'minus', value: ip })}>
        빼기</button>
    </div>
  );
}

export default App;
