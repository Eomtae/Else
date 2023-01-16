import './App.scss';
import { useEffect , useState } from "react"
import Insert from './Insert'
import List from './List'
import AttContext,{AppC} from './AttContext'


function App() {
  //출석부,todolist

  const [data, setData] = useState([]);


  return (
    <AttContext>
      <main>
        <List />
      <Insert />
      </main>
    </AttContext>
  );
}

export default App;

