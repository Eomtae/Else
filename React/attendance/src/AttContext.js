import { createContext, useState } from 'react';
export const AppC = createContext(null);

const AttContext = ({ children }) => {


    const [data, setData] = useState([]);
    const [type, setType] = useState(['insert',0]);


    function dataCtl(type, value) {
        switch (type) {
            case 'insert':
                const insert = [...data, value];
                setData(insert);
                break;
            case 'modify':
                // setData(data.map((obj)=>(obj.id ===num)?{...obj,name:'홍길동'}:obj);
                break;
            case 'remove':
                // setData(data.filter((obj)=>obj.num !==num))
                break;
        }
        // if(매개변수 == 'insert'){

        // }else if(매개변수 == 'modify'){

        // }
    }

    //추가
    function insert() {
        const insert = [...data,value];
        setType(insert);
    }

    //수정
    function modify(num) {

        setData(data.map((obj) => (obj.id === value.id) ? { ...obj, name: value.name } : obj));
        setType(['insert',0]);
        // break;

        // const modify = data.map((obj) => {
        //   // {id : 2,name:'홍길동'}
        //   if (obj.id === num) { obj.name = '홍길동' }
        //   return obj;

        //   return (obj.id === num) ? { ...obj, name: '홍길동' } : obj;

        // }
        // )
        // setData(modify)
    }

    //삭제
    function remove(num) {
        setData(data.filter((obj) => obj.num !== 2))
        // setData(data.filter(
        //   function (obj) {
        //     return obj.num !== 2;
        //   }
        // )
        // )
    }




    return (
        <AppC.Provider value={{dataCtl,data,type,setType}}>
            {children}
        </AppC.Provider>
        // dataCtl : function dataCtl(){
        //     data : data
        // }
    )
}


export default AttContext