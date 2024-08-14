import {useEffect, useState} from "react";

function Timer(){
    const [timer,setTimer]=useState(10);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTimer((preTimer)=>(preTimer===0?0:preTimer-1));
        },1000);
        return ()=>{
            clearInterval(interval);
        };
    },[]);
    return <p>Timer: {timer}</p>
}
export default Timer;