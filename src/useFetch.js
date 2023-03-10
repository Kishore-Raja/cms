import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        fetch(url)
        .then(res=>{
          if(!res.ok){
            throw Error("Failure: retry after some time")
          }
          return res.json()
        })
        .then(data => {
            setIsPending(false)
            setData(data)
        })
        .catch( err=>{
          setIsPending(false)
          setError(err.message)
        })
    },[]);
    return { data, error, isPending}
}
 
export default useFetch;