import React, {useState} from 'react'

const Timer = ()=> {
    const [count, setCount] = useState(30);
    const decreaseTime=()=>{
        setCount(count-1);
    }
    return (
        <div>
            <button onClick = {decreaseTime}>Start Timer</button>
        </div>
    )
}

export default Timer