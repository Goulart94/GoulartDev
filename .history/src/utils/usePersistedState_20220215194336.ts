import { useEffect, useState } from "react";


function usePersistedState(key: string, initialState: any){
    
    const[state, setstate]=useState(initialState);
        
  

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
        const storageValue = localStorage.getItem(key)
        
        if(storageValue){
            return JSON.parse(storageValue)

        }else{

            return initialState

        }
    },[key, state]);

    return [state, setstate];

}

export default usePersistedState;