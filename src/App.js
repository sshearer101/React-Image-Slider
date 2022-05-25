import {useState} from 'react'
import './App.css';
import { data } from "./data"


function App() {



const [image, setImage] = useState()

let count = 0

function handleClick(i){
  if (i === data.length - 1){
      return i[0]
  }
  setImage(image)
}


  return (
    <div className="App">
      {data.map((item, i) => 
      <div onClick={(() => handleClick(i))}>
        {item.image}
      </div>
      )}
    </div>
  );
}

export default App;
