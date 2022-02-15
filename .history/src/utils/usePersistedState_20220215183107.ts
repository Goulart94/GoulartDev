import { useEffect, useState } from "react";
import { json } from "stream/consumers";

function usePersistedState(key: string, initialState: any){
    
    const[state, setstate]=useState();

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    },[key, state]);

    return [state, setstate];

}

export default usePersistedState;