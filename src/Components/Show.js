import React from 'react'

const Show = ({a}) => {

  const [data,setdata] = a

  const deletehandler = (i) => {
    const filtered = data.filter((d,id) => {
      return (id !== i)
    })
    setdata(filtered);
  }


  const todoData = data.map((d,i) => {
    return <li key={i}>{d.text}   <button onClick={() => deletehandler(i)}>X</button></li>
  })


  return (
    <>
    <ul>
      {todoData.length>0 ? todoData : <li>"Your data will be shown here"</li>}
    </ul>
    </>
  )
}

export default Show