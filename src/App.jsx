import { useState } from 'react'
import './App.css'
import { Title } from './components/Title'
import { Second } from './components/Second'
import { Card } from './components/Card'
import { Inputs } from './components/Inputs'
// import Head from "./components/Head"

function App() {
  const [load, setLoad] = useState(false)
  const [cards,setCards] = useState([])

  const show = () => {
    load == true ? setLoad(false) : setLoad(true);
  }


  const addCard =(title, duration,date)=>{
setCards([...cards, {name:title , remains:`${duration} Days` ,date:date }]);
show();
}

  return (
    <>
      <div className="mainDiv">
        { (load) ?<Inputs func={show} addCard={addCard}/>:  <Title func={show} addCard={addCard}/>}

        <Second />
        {cards.map((card,index)=>(
          <Card key={index} date={card.date} name={card.name} remains={card.remains} />

        ))}



      </div>
    </>
  )
}

export default App


{/* {load && (<Head/>)

        }
      
        {load == true ? <button onClick={show} className='border-4 w-[50px]'>Close</button>
          : <button onClick={show} className='border-4 w-[50px]'>Add</button>


        } */}