import React, { useContext } from 'react'
import { AppC } from './AttContext'

const List = () => {
    const { data,setType } = useContext(AppC);

    let b,c;


    return (
        <div>
            <ul>
                {
                    data.map((obj) => {
                        return <li key={obj.id}> 
                        {obj.name} 
                        <button onClick={()=>setType(['modify',obj.id])
                        }>수정</button>
                        <button onClick={()=>setType(['remove',obj.id])
                        }>삭제</button>
                        </li>
                    }
                  )
                }
            </ul>
        </div >

        
    )
}

export default List