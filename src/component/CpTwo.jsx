import React, { useContext } from 'react'
import { Sar } from '../App'
const CpTwo = () => {
    const {data} = useContext(Sar)
  return (
    <div>
        <p>Name is{data.name}</p>
        <p>Age is {data.age}</p>
        <p>Gender is {data.gender}</p>
        <p>School is {data.school}</p>

    </div>
  )
}

export default CpTwo