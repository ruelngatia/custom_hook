import {useState,useEffect} from 'react'
function useCustomCounter(initialValue){

    const [counter, setCounter] = useState(initialValue);

    useEffect(()=>{
        
        let interval = setInterval(()=>{
            setCounter(counter + initialValue)
        },1000)
        return(
            ()=>{
                clearInterval(interval)
            }
        )

    },[counter])

    return counter
}

export default useCustomCounter