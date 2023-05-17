import React, {useState} from "react"
const App =()=>{
  const[data,SetData] = useState(1)

  let Counter=()=>{
    if(data<20){
      SetData(data+1)
    }
  }
  return(
    <div>
      <h1>{data} </h1>
      <button onClick={Counter}>Counter </button>    </div>
  )
}
export default App