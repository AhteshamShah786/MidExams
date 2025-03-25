import React, {useState} from 'react'

const CountDownLightSwitch = ()=> {
    const [count, setCount] = useState(30);
    const [change, setChange] = useState()
    setTimeout(()=>{
        decreaseTime()
    }, 1000)
    const decreaseTime=()=>{
        setCount(count-1);
    }

    const changeTheme = ()=>{

    }
    return (
        <div>
            <h1>CountDown & Light Switch</h1>
            <div><button onClick = {changeTheme}>Toggle</button>LightMode</div>

            <input type = "range" value = {decreaseTime}></input>
            {count}
            <button onClick = {decreaseTime}>Start Timer</button>
        </div>
    )
}

export default CountDownLightSwitch