import './App.scss';
import List from './List'
import Main from './Main'
import { useState, useReducer } from 'react'
import { MyContext } from './AccountContext'

const initData = {
  totalCount: 0,
  list: [
    // { id: 0, price: 1000, msg: 'hello', day: '1.17' }
  ]
}


function reducer(state, action) {


  switch (action.type) {
    case 'plus':
      console.log(state.totalCount)
      return {
        totalCount: state.totalCount + action.price,
        
        list: [
          ...state.list,
          { id: 0, price: action.price, msg: action.msg, day: action.day }
        ],
      }; //switch쓸 때에는 break 사용 

    case 'minus': return {
      totalCount: state.totalCount - action.price,
      
      list: [
        ...state.list,
        { id: 0, price: action.price, msg: action.msg, day: action.day }
      ]
    };
  }
}


function App() {

  // const [data,setData] = useState(data);

  // const [data,dispatch] = useReducer(함수,데이터);
  const [data, dispatch] = useReducer(reducer, initData); // initData는 state
  // dispatch({ type: 'plus', price: 0, msg: 0, day: 0 })
  

  function test() {
    let date = new Date();
    date = (date.getMonth() + 1) + '.' + date.getDate();
    const content = { type: 'plus', price: bbb, msg: 'test....', day: '1.17' }
    dispatch(content)
  }

  function minus(){
    let date = new Date();
    date = (date.getMonth()+1) + '.' + date.getDate();
    const elMin = {type : 'minus',price:bbb, msg:'test.....', day:'1.17'}
    dispatch(elMin)
  }

  function FFF(e){
    let aa= e.target.value
    setBbb(aa)
  }
  
  const [bbb,setBbb] = useState();
  return (

    <div className="money">
      {data.totalCount}
      <section className='one'>
        2023 입출금 내역
      </section>
      <section className='two'>
        <input type='text' onChange={FFF} />
        <button className='btn' onClick={test}>예금</button>
        <button className='btn' onClick={minus}>출금</button>
        <List />
      </section>
    </div>

  );
}

export default App;
