import { useState } from 'react'
import Show from './Components/Show'

function App() {

  const [data, setData] = useState([])


  const [input, setinput] = useState({
    text: '',
    color:'#ffffff'
  })

  const inputhandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }

  const submithandler = (e) => {
    e.preventDefault()

    setData([...data, input])
    setinput({
      text: '',
      color:'#ffffff'
    })
  }


  return (
    <>
      <div >
        <form onSubmit={(e) => submithandler(e)}>
          <input type="text" placeholder="Enter your Task" onChange={(e) => inputhandler(e)} value={input.text} name="text" />
          <br></br>
          <br></br>
          <input type="color" onChange={(e) => inputhandler(e)}
            value={input.color} name="color" />
          <br></br>
          <br></br>
          <input type="Submit" />
        </form>


        < Show a={[data, setData]} />
      </div>
    </>
  );
}

export default App;
